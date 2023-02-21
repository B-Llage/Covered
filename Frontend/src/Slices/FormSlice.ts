import { createSlice } from "@reduxjs/toolkit";
import { FormState } from "../Domain/Interfaces/FormState";

const initialState: FormState = {
  userData: {
    name: "",
    location: "",
    position: "",
    companyName: "",
    education: "",
    degree: "",
    schoolName: "",
  },
  formIsValid: false,
  formFieldsErrors: {
    name: false,
    education: false,
    schoolName: false,
    location: false,
    companyName: false,
    position: false,
    degree: false,
  },
  formFieldsValidity: {
    name: false,
    education: false,
    schoolName: false,
    location: false,
    companyName: false,
    position: false,
    degree: false,
  },
  skills: ["Leadership"],
};
export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload.userData;
    },
    setFormIsValid: (state, action) => {
      state.formIsValid = action.payload.formIsValid;
    },
    setFormFieldsErrors: (state, action) => {
      state.formFieldsErrors = action.payload.formFieldsErrors;
    },
    setFormFieldsValidity: (state, action) => {
      state.formFieldsValidity = action.payload.formFieldsValidity;
    },
    setSkills: (state, action) => {
      state.skills = action.payload.skills;
    },
  },
});

export const {
  setUserData,
  setFormIsValid,
  setFormFieldsErrors,
  setFormFieldsValidity,
  setSkills,
} = formSlice.actions;

export default formSlice.reducer;
