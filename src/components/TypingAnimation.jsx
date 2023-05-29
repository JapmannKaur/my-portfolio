import React, { useState, useEffect } from 'react'; 
import {Link} from 'react-router-dom'
const TypingAnimation = () => {
  const titles = ["CS Student", "Front-End Developer", "UX/UI Designer", "Coding Enthusiast"];
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
      <h2>Hey! I am Japmann Kaur Banga</h2>
      <p>I am a <span
        className="typing"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {value}
      </span></p>
      <div className='btn'>
        <button className='btn1'><span className='txt1'>Resume</span></button>
        <button className='btn2'><Link to='/about'>Explore More</Link></button> 
      </div>
    </div>
  );
};

export default TypingAnimation;
