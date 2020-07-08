import React, {Component} from 'react';
import EmployeeCard from"./components/EmployeeCard";
import './App.css';
import Search from "./components/Search.js";


// const searchBar = SearchFunction();
const employeesOrigin = [
  {
    name: "Bob",
    position: "Bobber",
    email: "Bob@Bob.Ber",
    key: 1
  },
  {
    name: "Bill",
    position: "Billing",
    email: "Bill@Bob.Ber",
    key: 2
  },
  {
    name: "Ben",
    position: "Bender",
    email: "Ben@Bob.Ber",
    key: 3
  },
  {
    name: "Bjorn",
    position: "Bjorn Identifier",
    email: "Bjorn@Bob.Ber",
    key: 4
  },
  {
    name: "Jakoval",
    position: "Jakoval Trader",
    email: "Jakoval@Bob.Ber",
    key: 5
  },
  {
    name: "Adam",
    position: "Adam Smasher",
    email: "Adam@Bob.Ber",
    key: 6
  },
]

let employees = employeesOrigin;
let sortType = "unsorted";

function alphaSort(sortList) {
  console.log("Sortin'");

  switch (sortType) {
    case "down":
      return sortList.reverse();
    default:
      sortType = "down"
      return sortList.sort((compareOne, compareTwo) => compareOne.name.localeCompare(compareTwo.name));
  }
}

class App extends Component {

  state = {
    stateEmployees : employees
  };

  searchFilter = searchValue => {
    let sortedEmployees = employees.filter(employee => employee.name.includes(searchValue));
    this.setState({
      stateEmployees: sortedEmployees
    })
  }

  render(){
    return (
    <div className="App">
      <div><Search 
      searchFilter={this.searchFilter}
      />
      <button type="button" onClick={() => console.log(alphaSort(this.state.stateEmployees))}>Name Alphasort</button>
      </div>
      <div id="resultList">{
      this.state.stateEmployees.map(employee => (
          <EmployeeCard
            key={employee.key}
            name={employee.name}
            position={employee.position}
            email={employee.email}
          />
        ))}</div>
    </div>
    )
  };
};
export default App;

/*/
We want the following:

An array of employees, with (possibly) several categories of details.
 An element that can be used to build the display of this list on the page.
 
 COMPONENT A search bar that can be used to build a modified list to be displayed.
 This will call filter on a change in the search box.
  This can be static on the page. Example didn't have a Search button. 
   Feel we may want to look into one for ourselves.


COMPONENT A filter that will remove filtered employees from the full list object, and return the reduced list object.
This will take filter by restrictions (trimmed) from the search bar on the main page. If this results in an empty string, just skip the filter step.
The full list will be stored here for the moment. May break it out to another component if needed, like if we want to add/delete.
This will be called by the main page, and will then call the rendering loop, and return the results of that render, for printing on the main page.

COMPONENT A for/for each loop to place one of these elements for each employee given.
This will take a prop object of the employees desired, and build the display of these employees, returning the full build.
This will be called by the App for each array item it receives from the filter>search returns.
/*/