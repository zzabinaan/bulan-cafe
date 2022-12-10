import React from 'react';

function SearchCafe({ searchTitle, onTitleChange }) {
  return (
    <div className="search_container">
      <input type="text" placeholder="Cari keyword..." defaultValue={searchTitle} onChange={(event) => onTitleChange(event.target.value)}></input>
    </div>
  );
}

export default SearchCafe;
