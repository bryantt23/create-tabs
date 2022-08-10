import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState('simple');
  return (
    <div className='App'>
      <button onClick={() => setSelectedTab('simple')}>Simple</button>
      <br />
      <button onClick={() => setSelectedTab('fancy')}>Fancy title</button>
      <br />
      {selectedTab === 'simple' ? <p>Simple text</p> : <p>Fancy title text</p>}
    </div>
  );
}

export default App;
