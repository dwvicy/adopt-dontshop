import React from 'react'
import ReactDOM from 'react-dom'

const Item = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.price),
    React.createElement("h3", {}, props.brand),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Escasuma!"),
    React.createElement(Item, {
      name: "Chic A-line Skirt",
      price: "Rs. 2,078",
      brand: "Vero Moda",
    }),
    React.createElement(Item, {
      name: "Peplum Skirts",
      price: "Rs. 778",
      brand: "Only",
    }),
    React.createElement(Item, {
      name: "Boho Top",
      price: "Rs. 1,078",
      brand: "Mango",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
