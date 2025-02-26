import { useState } from 'react';
import Description from './Description';
import Options from './Options';
import Feedback from './Feedback';

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
     

      <Description />
      <Options text="Good" onUpdate={handleClick} />
      <Options text="Neutral" onUpdate={handleClick} />
      <Options text="Bad" onUpdate={handleClick} />
      <Options text="Reset" onUpdate={handleClick}/>
      <Feedback count={clicks} />
     
    </div>
  );
}

