import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState('simple');
  return (
    <div className='App'>
      <div></div>
      <button
        style={{
          backgroundColor: '#0089f2',
          color: 'white',
          borderRadius: 5,
          padding: '10px 20px'
        }}
        onClick={() => setSelectedTab('simple')}
      >
        Simple
      </button>
      <button
        style={{
          color: '#0089f2',
          backgroundColor: 'white',
          borderRadius: 5,
          padding: '10px 20px',
          border: '1px white solid'
        }}
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
