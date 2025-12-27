import React from 'react';

function render(prop){
    //console.log("Rendering for:");
    //console.log(prop);
    
    return (<h2>Name: {prop.name}</h2>);
}

export default render;