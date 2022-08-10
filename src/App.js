import './App.css';
import { useState } from 'react';

const selectedButtonStyle = {
  backgroundColor: '#0089f2',
  color: 'white',
  borderRadius: 5,
  padding: '0 10px',
  height: 40,
  border: '1px solid #0089f2',
  margin: 2
};

const nonSelectedButtonStyle = {
  backgroundColor: 'white',
  color: '#0089f2',
  borderRadius: 5,
  padding: '0 10px',
  height: 40,
  border: '1px solid white',
  margin: 2
};

function App() {
  const [selectedButton, setSelectedButton] = useState('simple');
  return (
    <div className='App'>
      <button
        style={
          selectedButton === 'simple'
            ? selectedButtonStyle
            : nonSelectedButtonStyle
        }
        onClick={() => setSelectedButton('simple')}
      >
        Simple
      </button>
      <button
        style={
          selectedButton === 'fancy'
            ? selectedButtonStyle
            : nonSelectedButtonStyle
        }
        onClick={() => setSelectedButton('fancy')}
      >
        <span style={{ fontWeight: 800 }}>Fancy</span> title
      </button>
      <br />
      {selectedButton === 'simple' ? (
        <p>Simple text</p>
      ) : (
        <p>Fancy title text</p>
      )}
    </div>
  );
}

export default App;
