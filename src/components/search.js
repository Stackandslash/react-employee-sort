import React from 'react';
import Filter from "./filter.js";
//COMPONENT A search bar that can be used to build a modified list to be displayed.
//This can be static on the page. Example didn't have a Search button. 
//Feel we may want to look into one for ourselves.

function SearchFunction() {
  return (
    <div className="searchDiv">
      <form>
        <label htmlFor="filter">Filter</label><br/>
        <input type="text" id="filter" name="filter" onChange={(event) => {
          let filterBoxText = event.target.value;
        Filter(filterBoxText)}}/>
      </form>
    </div>
  );
}

export default SearchFunction;