import React from 'react';
import "./search.css"

function Search ({value, setValue}) {

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className='search-main'>
      <input
        type="text"
        placeholder=" Search..."
        className= 'seach-input'
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;