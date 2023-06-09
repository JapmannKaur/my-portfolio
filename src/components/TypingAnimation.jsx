import React, { useState, useEffect } from 'react'; 
import {Link} from 'react-router-dom'
const TypingAnimation = ({isDarkMode}) => {
  const titles = ["CS Student", "Front-End Developer", "UX/UI Designer","Coding Enthusiast"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    let intervalId;

    if (hovered) {
      setValue(titles[currentIndex]);
    } else {
      intervalId = setInterval(() => {
        const currentTitle = titles[currentIndex];
        setValue(currentTitle.substring(0, value.length + 1));
        if (value === currentTitle) {
          clearInterval(intervalId);
          setTimeout(() => {
            setValue('');
            setCurrentIndex((currentIndex + 1) % titles.length);
          }, 2000);
        }
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, hovered, value, titles]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <h2 className={`${isDarkMode?"dark1-color":"light1-color"}`}>Japmann Kaur Banga</h2>
      <p className={`${isDarkMode?"dark1-color":"light1-color"}`}>I am a <span
        className={`${isDarkMode?"typing-dark":"typing-light"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {value}
      </span></p>
      <div className='btn'>
        <button className={`${isDarkMode?"btn1":"btn1-light"}`} onClick={() => window.location.href = "https://drive.google.com/drive/folders/1zSDbPcoNsD3NLILksY_r7LKwBeA6scow?usp=sharing"}><span className='txt1'>Resume</span></button>
        <button className={`${isDarkMode?"btn2":"btn2-light"}`}><Link to='/about'>Explore More</Link></button> 
      </div>
    </div>
  );
};

export default TypingAnimation;
