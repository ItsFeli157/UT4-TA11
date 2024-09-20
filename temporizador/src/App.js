import React, { useState, useEffect } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="App">
      <h1>Temporizador</h1>
      <p>Han pasado {seconds} segundos.</p>
    </div>
  );
}

export default App;
