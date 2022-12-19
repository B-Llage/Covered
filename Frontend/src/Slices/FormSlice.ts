import { createSlice } from '@reduxjs/toolkit'
import { FormState } from '../Domain/Interfaces/FormState'

const initialState: FormState = {
    userData: {
        name: '',
        location: '',
        position: '',
        companyName: '',
        education: '',
        degree: '',
        schoolName: '',
      },
      skills: ['Leadership']
  }
export const formSlice = createSlice({
  name: 'form',
  
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData =  action.payload.userData
    },
    setSkills: (state, action) => {
        state.skills = action.payload.skills
    }
  }
})

export const { setUserData, setSkills } = formSlice.actions

export default formSlice.reducer