import React from 'react';
import render from "./render.js";

const fullList = [
    {
        name: "Bob Bobson"
    },
    {
        name: "Sue Susan"
    }
]

function Filter(props){
    console.log("Filtering for:");
    console.log(props);

    //filter functionality goes here.
    let filteredList;
    if (props.name === ""){
        filteredList = fullList;
    }
    else{
        filteredList = fullList.filter(object => object.name.includes(props));
    }
    let renderedList = render(filteredList);
    return renderedList;
}

export default Filter;