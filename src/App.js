import React, { useState } from 'react';

const NumberChecker = () => {
  const [input, setInput] = useState('');
  const [showVideoA, setShowVideoA] = useState(false);
  const [showVideoB, setShowVideoB] = useState(false);
  const [thalaMessage, setThalaMessage] = useState('');
  const [nonSevenMessage, setNonSevenMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputArray = input.split('');
    const total = inputArray.reduce((a, b) => {
      const numB = parseInt(b);
      return isNaN(numB) ? a : a + numB;
    }, 0);

    if (total === 7) {
      console.log('Thala for a reason');
      setShowVideoA(true);
      setShowVideoB(false);
      setThalaMessage('Thala for a reason');
      setNonSevenMessage('');
    } else {
      console.log('what if there is no 7 still Thala is for a reason');
      setShowVideoA(false);
      setShowVideoB(true);
      setThalaMessage('');
      setNonSevenMessage('what if there is no 7 still Thala is for a reason');
    }
  };

  const videoStyle = {
    width: '100%',
    height: '315px',
    border: '0',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', 
    color: '#333', 
  };

  const formStyle = {
    marginBottom: '20px',
  };

  const messageStyle = {
    fontSize: '18px',
    margin: '10px 0',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#007BFF' }}>Enter a Number Below</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff' }}>
          Submit
        </button>
      </form>
      {showVideoA && (
        <iframe
          style={videoStyle}
          src="https://www.youtube.com/embed/AO4EZq6AUpc?&autoplay=1&loop=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {showVideoB && (
        <iframe
          style={videoStyle}
          src="https://www.youtube.com/embed/fXJ2EkT64us?&autoplay=1&loop=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {thalaMessage && <h3 style={{ color: '#28a745', ...messageStyle }}>{thalaMessage}</h3>}
      {nonSevenMessage && <h3 style={{ color: '#dc3545', ...messageStyle }}>{nonSevenMessage}</h3>}
    </div>
  );
};

export default NumberChecker;
