import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Components/Layouts/CoveredLayout';
import Home from './Views/Home';
import CoverLetterEditor from './Views/CoverLetterEditor';
import SkillsEditor from './Views/SkillsEditor';
import Summary from './Views/Summary';
import Result from './Views/Result';

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<CoverLetterEditor />} />
          <Route path="/skills" element={<SkillsEditor />} />
          <Route path="/summary" element={<Summary />} />
          <Route path='/result' element={<Result />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
