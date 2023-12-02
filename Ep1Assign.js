// document.getElementById("Greet").innerHTML="Hello World" --using jS


const element= React.createElement("h1",{},"Hello World from React");
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(element);


