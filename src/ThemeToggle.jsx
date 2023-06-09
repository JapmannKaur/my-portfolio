import React, { useState } from 'react';
import './css/ThemeToggle.css';

const ThemeToggle = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    onToggle(newMode);
  };

  return (
    <div className={`toggle-container ${isDarkMode ? 'dark' : 'light'}`}>
      <label className="toggle">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
      {/* <span className="toggle-label">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </span> */}
    </div>
  );
};

export default ThemeToggle;



// import React, { useState } from 'react';

// const ThemeToggle = ({ onToggle }) => {
//   const [isDarkMode, setIsDarkMode] = useState(true);

//   const handleToggle = () => {
//     setIsDarkMode(!isDarkMode);
//     onToggle(!isDarkMode);
//   };

//   return (
//     <div style={{position:'relative', top:'12vh', display:'flex', justifyContent:'end', paddingRight:'0.7vw'}}>
//       <button onClick={handleToggle} style={{}}>
//         {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </div>
//   );
// };

// export default ThemeToggle;
