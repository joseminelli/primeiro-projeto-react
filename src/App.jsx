import { useState } from 'react';
import MenuComp from './Menu';
import './ant.css'

const App = () => {
  const [theme, setTheme] = useState('light'); // Defina o tema inicial

  const handleThemeChange = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div style={{ background: theme === 'dark' ? '#282828' : '#ffffff' }} id='menuBar'>
      <MenuComp theme={theme} onThemeChange={handleThemeChange} />
    </div>
  );
};

export default App;
