// CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";
// import Cars from "./practice";
import Animals from "./data";

console.log(Animals);

const [cat, dog] = Animals;

console.log(cat);

// Destucture an Object

const { name: catName, sound: catSound } = cat;

console.log(catSound);

// Adding a default value

const { name = "Fluffy", sound = "Purr" } = cat;

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
