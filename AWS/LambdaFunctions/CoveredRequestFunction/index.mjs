import axios from "axios";
export const handler = async (event) => {
  const body = JSON.parse(event.body);
  const userData = body.userData;
  const skillsString = body.skills.join(', ');

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
    prompt = `You are a Cover Letter Generator. Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}. Do not mention work experience.`;
  } else if (userData.education === "High School Degree") {
    prompt = `You are a Cover Letter Generator. Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. The applicant education is a ${userData.education} from ${userData.schoolName}. Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}. Do not mention work experience.`;
  } else if (
    userData.education === "Bachelor's Degree" ||
    userData.education === "PhD"
  ) {
    prompt = `You are a Cover Letter Generator. Generate cover letter for a ${userData.position} position at ${userData.companyName}. The name of the applicant is ${userData.name}, they are from ${userData.location}. The applicant education is a ${userData.education} in ${userData.degree} from ${userData.schoolName}. Letter is addressed to ${userData.companyName} Hiring Committee. Candidate is skilled in: ${skillsString}. Do not mention work experience.`;
  }
  
  const result = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{"role": "system", "content": prompt}],
      max_tokens: 600
    },
    {
      headers: {
        Authorization: `Bearer [API KEY]`,
      },
    }
  );
  
  console.log(result.data.choices)

  let response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ result: result.data.choices[0].message.content }),
  };
  return response;
};
