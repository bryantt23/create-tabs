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
  const [selectedTab, setSelectedTab] = useState('simple');
  return (
    <div className='App'>
      <button
        style={
          selectedTab === 'simple'
            ? selectedButtonStyle
            : nonSelectedButtonStyle
        }
        onClick={() => setSelectedTab('simple')}
      >
        Simple
      </button>
      <button
        style={
          selectedTab === 'fancy' ? selectedButtonStyle : nonSelectedButtonStyle
        }
        onClick={() => setSelectedTab('fancy')}
      >
        <span style={{ fontWeight: 800 }}>Fancy</span> title
      </button>
      <br />
      {selectedTab === 'simple' ? <p>Simple text</p> : <p>Fancy title text</p>}
    </div>
  );
}

export default App;
