import React from "react";
import ReactDOM from "react-dom";
//React Element
const name = (
  <h1 id="heading" className="head">
    Sridhar
  </h1>
); // creating react element using JSX

// React Functional Component
const TitleComponent=()=>(
<div id="Title">
    <h1>Learning React from Namaste React </h1>
</div>
);
// we can write javascript code inside jsx using curly braces. ie {javascript code}

const number=100+500;


// component compostiion  getting other functinal component code and rendering. example of component composition
const HeadingComponent=()=>(
   <div id="container">
    <h1>{number}</h1>
     {TitleComponent()} {/*we can call Functional component inside {} */}
    <TitleComponent/> {/*normal way of rendering */}
    <TitleComponent></TitleComponent> {/* other way */}
   <h3>You created Functional Component</h3>
   </div>
);

const image = <img src="http://placekitten.com/g/200/300"></img>;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(name);
 root.render(<HeadingComponent/>);
