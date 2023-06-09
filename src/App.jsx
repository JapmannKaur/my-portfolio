import MyRoutes from './MyRoutes';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = (value) => {
    setIsDarkMode(value);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <ThemeToggle onToggle={handleToggle} />
      <MyRoutes isDarkMode={isDarkMode}/>
    </div>
  );
};

export default App;
