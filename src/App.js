import { useState } from 'react';
import Content from './components/Content';
import Control from './components/Control';
import Lap from './components/Lap';

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isLap, setIsLap] = useState(false);

  const [history, setHistory] = useState([]);

  const start = () => {
    setIsStart(true);
    setIsReset(false);
  };

  const stop = () => {
    setIsStart(false);
    setIsReset(false);
  };

  const reset = () => {
    setIsReset(true);
    setIsStart(false);
    setHistory([]);
  };

  const lap = () => {
    setIsLap(true);
  };

  const addHistory = (time) => {
    setHistory((prevLap) => [...prevLap, time]);
    setIsLap(false);
  };

  return (
    <div>
      <Content
        isStart={isStart}
        isReset={isReset}
        isLap={isLap}
        onAddHistory={addHistory}
      />
      <Control onStart={start} onStop={stop} onReset={reset} onLap={lap} />
      {history && <Lap history={history} />}
    </div>
  );
}

export default App;
