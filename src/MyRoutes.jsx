import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact';
import Background from './components/Background';

const MyRoutes = ({isDarkMode}) => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home isDarkMode={isDarkMode}/>} />
        <Route path="/about" element={<About isDarkMode={isDarkMode}/>} />
        <Route path="/projects"  element={<Projects isDarkMode={isDarkMode}/>}/>
        <Route path="/blogs" element={<Blogs isDarkMode={isDarkMode}/>} />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode}/>} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
