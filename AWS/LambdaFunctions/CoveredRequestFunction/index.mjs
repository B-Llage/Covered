import axios from "axios";
export const handler = async (event) => {
  const body = JSON.parse(event.body);
  const userData = body.userData;
  const skillsString = body.skills.join(', ')

  let prompt = "";

  if (!userData.education) {
    let response = {
      statusCode: 403,
      headers: {},
      body: JSON.stringify({ result: "Bad Request." }),
    };
    return response;
  }

  if (userData.education === "None") {
    prompt = `Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. Skills include . Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}.`;
  } else if (userData.education === "High School Degree") {
    prompt = `Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. The applicant education is a ${userData.education} from ${userData.schoolName}. Skills include . Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}.`;
  } else if (
    userData.education === "Bachelor's Degree" ||
    userData.education === "PhD"
  ) {
    prompt = `Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. The applicant education is a ${userData.education} in ${userData.degree} from ${userData.schoolName}. Skills include . Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}.`;
  }

  const result = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 1500,
    },
    {
      headers: {
        Authorization: `Bearer YOUR_API_KEY`,
      },
    }
  );

  let response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ result: result.data.choices[0].text }),
  };
  return response;
};
