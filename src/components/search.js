import React from 'react';
//COMPONENT A search bar that can be used to build a modified list to be displayed.
//This can be static on the page. Example didn't have a Search button. 
//Feel we may want to look into one for ourselves.

function SearchFunction(props) {
  return (
    <div className="searchDiv">
      <form>
        <label htmlFor="filter">Filter</label><br/>
        <input type="text" id="filter" name="filter" onChange={(event) => {
          let filterBoxText = event.target.value;
        props.searchFilter(filterBoxText)}}/>
      </form>
    </div>
  );
}

export default SearchFunction;