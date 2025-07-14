import React, { useState, useCallback, useEffect, useRef } from 'react';

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null); // useRef to access input box

  const generatePassword = useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numberAllowed) charset += '0123456789';
    if (charAllowed) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }

    setPassword(newPassword);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  const copyToClipboard = () => {
    // Select the input field and copy
    passwordRef.current.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Password Generator</h2>

      <input
        type="range"
        min="4"
        max="20"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />
      <p>Password Length: {length}</p>

      <label>
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)}
        />
        Include Numbers
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={(e) => setCharAllowed(e.target.checked)}
        />
        Include Special Characters
      </label>

      <br /><br />

      <input
        type="text"
        value={password}
        readOnly
        ref={passwordRef}
        style={{ width: '300px', padding: '5px' }}
      />

      <button onClick={copyToClipboard} style={{ marginLeft: '10px' }}>
        Copy
      </button>
    </div>
  );
}

export default PasswordGenerator;
