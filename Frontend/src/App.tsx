import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CoverLetterEditor from './Views/CoverLetterGenerator/CoverLetterEditor';
import SkillsEditor from './Views/CoverLetterGenerator/SkillsEditor';
import Summary from './Views/CoverLetterGenerator/Summary';
import Result from './Views/CoverLetterGenerator/Result';
import CoverLetterHome from './Views/CoverLetterGenerator/CoverLetterHome';
import CoverLetterLayout from './Components/Layouts/CoverLetterLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoverLetterLayout />}>
          <Route index element={<CoverLetterHome />} />
          <Route path="editor" element={<CoverLetterEditor />} />
          <Route path="skills" element={<SkillsEditor />} />
          <Route path="summary" element={<Summary />} />
          <Route path='result' element={<Result />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
