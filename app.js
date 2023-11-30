import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement(
        "h1",
        { id: "heading" },
        " i have just created nested elements using react"
      ),
      React.createElement("h2", { id: "heading" }, " H2 tag is here"),
    ]),

    React.createElement("div", { id: "child2" }, [
        React.createElement(
          "h1",
          { id: "heading" },
          " i have just created nested elements using react"
        ),
        React.createElement("h2", { id: "heading" }, " H2 tag is here"),
      ])]
);
console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
