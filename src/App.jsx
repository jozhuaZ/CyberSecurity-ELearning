import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import LessonPage from './Lessons/LessonPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/Lessons/:topic' element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  );
}