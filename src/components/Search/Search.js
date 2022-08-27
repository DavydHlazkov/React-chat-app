import React from 'react';
import "./search.css"
import {useSelector, useDispatch} from "react-redux"
import { addSearch } from '../../redux/searchReducer';


function Search () {

  const search = useSelector(state => state.search.search)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(addSearch(event.target.value))
  }

  return (
    <div className='search-main'>
      <input
        type="text"
        placeholder=" Search..."
        className= 'seach-input'
        value={search}
        onChange={handleChange}
      />
    </div>
  );
}; 

export default Search;