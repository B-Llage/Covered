import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserInformationEditor from './Views/CoverLetterGenerator/UserInformationEditor';
import SkillsEditor from './Views/CoverLetterGenerator/SkillsEditor';
import Summary from './Views/CoverLetterGenerator/Summary';
import Result from './Views/CoverLetterGenerator/Result';
import CoverLetterHome from './Views/CoverLetterGenerator/CoverLetterHome';
import CoverLetterLayout from './Components/Layouts/CoverLetterLayout';
import JobInformationEditor from './Views/CoverLetterGenerator/JobInformationEditor';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoverLetterLayout />}>
          <Route index element={<CoverLetterHome />} />
          <Route path="You" element={<UserInformationEditor />} />
          <Route path="Job" element={<JobInformationEditor />} />
          <Route path="skills" element={<SkillsEditor />} />
          <Route path="summary" element={<Summary />} />
          <Route path='result' element={<Result />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
