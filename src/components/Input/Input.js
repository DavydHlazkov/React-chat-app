import React,  {useState} from 'react';

function Input () {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Type your message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        
      />
    </div>
  );
};

export default Input