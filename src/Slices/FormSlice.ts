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
      skills: ['test']
  }
export const formSlice = createSlice({
  name: 'form',
  
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userData =  action.payload.userData
    },
    setSkills: (state, action) => {
        state.skills = action.payload.skills
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUserData, setSkills } = formSlice.actions

export default formSlice.reducer