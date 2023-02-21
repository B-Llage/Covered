import { UserData } from "../UserData";

export interface FormState {
  userData: UserData;
  formIsValid: boolean;
  formFieldsErrors: {
    name: boolean;
    education: boolean;
    schoolName: boolean;
    location: boolean;
    companyName: boolean;
    position: boolean;
    degree: boolean;
  };
  formFieldsValidity: {
    name: boolean;
    education: boolean;
    schoolName: boolean;
    location: boolean;
    companyName: boolean;
    position: boolean;
    degree: boolean;
  };
  skills: string[];
}
