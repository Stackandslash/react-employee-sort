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

function Filter(prop){
    //console.log("Filtering for:");
    //console.log(prop);

    //filter functionality goes here.
    let filteredList;
    if (prop === ""){
        filteredList = fullList;
    }
    else{
        filteredList = fullList.filter(object => object.name.includes(prop));
    }
    let renderedList = render(filteredList);
    return renderedList;
}

export default Filter;