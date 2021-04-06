import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";


const App = () => {
  return (
    <div>
      <h1>Escasuma</h1>
      <Item name="Peplum Skirt" price="Rs. 2,569" brand="Mango" />
      <Item name="Boho Top" price="Rs. 1,896" brand="Vero Moda" />
      <Item name="A-line Skirt" price="Rs. 1,574" brand="Forever 21" />
    </div>
  );
};

ReactDOM.render((<App/>), document.getElementById("root"));
