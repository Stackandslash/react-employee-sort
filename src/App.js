import React from 'react';
import './App.css';
import SearchFunction from "./components/search.js";


function App() {
  return (
    <div className="App">
      {SearchFunction()}
    </div>
  );
}

export default App;

/*/
We want the following:

An array of employees, with (possibly) several categories of details.
 An element that can be used to build the display of this list on the page.
 
 COMPONENT A search bar that can be used to build a modified list to be displayed.
  This can be static on the page. Example didn't have a Search button. 
   Feel we may want to look into one for ourselves.

COMPONENT A for/for each loop to place one of these elements for each employee given.
 This will take a prop object of the employees desired, and build the display of these employees, returning the full build.
 This will be called by the filter, and will return the full build.

COMPONENT A filter that will remove filtered employees from the full list object, and return the reduced list object.
 This will take filter by restrictions (trimmed) from the search bar on the main page. If this results in an empty string, just skip the filter step.
 The full list will be stored here for the moment. May break it out to another component if needed, like if we want to add/delete.
 This will be called by the main page, and will then call the rendering loop, and return the results of that render, for printing on the main page.
/*/