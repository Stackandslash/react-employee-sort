import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";
import Search from "./components/Search/Search.js";

// const searchBar = SearchFunction();
const employeesOrigin = [
  {
    name: "Bob",
    position: "Bobber",
    email: "Bob@Bob.Ber",
    key: 1,
  },
  {
    name: "Bill",
    position: "Billing",
    email: "Bill@Bob.Ber",
    key: 2,
  },
  {
    name: "Ben",
    position: "Bender",
    email: "Ben@Bob.Ber",
    key: 3,
  },
  {
    name: "Bjorn",
    position: "Bjorn Identifier",
    email: "Bjorn@Bob.Ber",
    key: 4,
  },
  {
    name: "Jakoval",
    position: "Jakoval Trader",
    email: "Jakoval@Bob.Ber",
    key: 5,
  },
  {
    name: "Adam",
    position: "Adam Smasher",
    email: "Adam@Bob.Ber",
    key: 6,
  },
];

let employees = employeesOrigin;

const alphaSort = (sortList, sortType) => {
  //This is a switch primarily to allow for future variations on the search function. Right now, it's just checking if it needs to invert the name search or not. Since the only way to reach a 'down' state here is via the default sort option, the 'down' case just inverts the existing list.
  //Probably going to refactor this to merge the qualifying if and this switch eventually.
  switch (sortType) {
    case "down":
      return sortList.reverse();

    default:
      return sortList.sort((compareOne, compareTwo) =>
        compareOne.name.localeCompare(compareTwo.name)
      );
  }
};

class App extends Component {
  state = {
    stateEmployees: employees,
    sortType: "unsorted",
  };

  //This is our filtering function. It could be compressed to a single line, if/when needed. It takes a searchValue, then filters our root employees list to entries that include it in the name key.
  searchFilter = (searchValue) => {
    let sortedEmployees = employees.filter((employee) =>
      employee.name.includes(searchValue)
    );
    this.setState({
      stateEmployees: sortedEmployees,
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Search searchFilter={this.searchFilter} />
          <button
            type="button"
            onClick={() => {
              console.log(
                alphaSort(this.state.stateEmployees, this.state.sortType)
              );
              if (this.state.sortType === "down") {
                this.setState({
                  sortType: "up",
                });
              } else {
                this.setState({
                  sortType: "down",
                });
              }
            }}
          >
            Name Alphasort
          </button>
        </div>
        <div id="resultList">
          {this.state.stateEmployees.map((employee) => (
            <EmployeeCard
              key={employee.key}
              name={employee.name}
              position={employee.position}
              email={employee.email}
            />
          ))}
        </div>
      </div>
    );
  }
}
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
