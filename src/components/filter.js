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
    let tempFilteredList;
    if (prop === ""){
        tempFilteredList = fullList;
    }
    else{
        tempFilteredList = fullList.filter(object => object.name.includes(prop));
    }
    const filteredList = tempFilteredList;
    return render(filteredList);
}

export default Filter;