import React from 'react';

function Search ({value, setValue}) {

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className= 'seach-input'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;