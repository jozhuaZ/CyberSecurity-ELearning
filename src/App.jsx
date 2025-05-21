import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import LandingPage from './LandingPage';
import LessonPage from './Lessons/LessonPage';
import AboutPage from './About/AboutPage';
import TipsPage from './Tips/TipsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/AboutPage' element={<AboutPage />} />
        <Route path='/TipsPage' element={<TipsPage />} />
        <Route path='/Lessons/:topic' element={<LessonPage />} />
      </Routes>
      <ToastContainer theme='colored' transition={Slide} draggable={'mouse'}/>
    </BrowserRouter>
  );
}