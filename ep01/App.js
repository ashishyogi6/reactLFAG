/**
 * <div id="parent">
 *  <div id="child">
 *      <h1></h1>
 *  </div>>
 * </div>
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

    const parent= React.createElement("div",{id: "parent"}, 
        React.createElement("div",{id: "child"}, 
        React.createElement("h1",
        {},
        "Heading using react with CDN! and multiple level")
        )
    );

// const heading = React.createElement("h1",
// {id: "heading"},
// "Heading using react with CDN!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
