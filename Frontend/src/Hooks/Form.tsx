import React from 'react'
import { useAppSelector, useAppDispatch } from './hooks'
import { setUserData, setSkills } from '../Slices/FormSlice'

export function Forms() {
    // The `state` arg is correctly typed as `RootState` already
    const userData = useAppSelector(state => state.userData)
    const skills = useAppSelector(state => state.skills)
    const dispatch = useAppDispatch()

    // omit rendering logic
}