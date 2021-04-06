import React from "react";

// const Item = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h2", {}, props.name),
//       React.createElement("h3", {}, props.price),
//       React.createElement("h3", {}, props.brand),
//     ]);
//   };

const Item = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <h3>{props.brand}</h3>
    </div>
  );
};

export default Item;
