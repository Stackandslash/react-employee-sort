import React from 'react';
import Filter from "./filter.js";

function SearchFunction() {
  return (
    <div className="searchDiv">
      <form>
        <label htmlFor="filter">Filter</label><br/>
        <input type="text" id="filter" name="filter" onChange={(event) => {
          let filterBoxText = event.target.value;
          console.log(filterBoxText);
        Filter(filterBoxText)}}/>
      </form>
    </div>
  );
}

export default SearchFunction;