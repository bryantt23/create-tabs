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

  function Button({ text, styleObject, func }) {
    return (
      <button style={styleObject} onClick={func}>
        {text}
      </button>
    );
  }

  return (
    <div className='App'>
      <Button
        text='Simple'
        styleObject={
          selectedButton === 'simple'
            ? selectedButtonStyle
            : nonSelectedButtonStyle
        }
        func={() => setSelectedButton('simple')}
      />

      <Button
        text='Fancy'
        styleObject={
          selectedButton === 'fancy'
            ? selectedButtonStyle
            : nonSelectedButtonStyle
        }
        func={() => setSelectedButton('fancy')}
      />
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
