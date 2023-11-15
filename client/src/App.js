import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import 'xp.css/dist/98.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/projects' element={<ProjectsPage />} />
          <Route exact path='/about' element={<AboutPage />} /> 
          <Route exact path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;