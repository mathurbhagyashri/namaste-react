import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactELement -JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "next chapter new begining"
);
console.log(heading);

// jsx - html inside javascript or html like syntax
// jsx( transpiled before reaches to js engine)- parcel-- babel

// JSX => Babel transpiles it to React.createElement => ReactELement -JS Object => HTMLElement(render)
const elem= <span>ELEMENT</span>
const jsxHeading = (
  <>
    <h1 className="head" tabIndex="2" id="heading">
    Namaste react using JSX ❤️
  </h1>
  {elem}
  </>
);
console.log(jsxHeading);

const Title=()=>(
    <h1> title check ❤️❤️ </h1>
)

const name= 'bhagyashri'

// React functional component
// adding Title component into HeadingComponent == component composition
const HeadingComponent = () => (
  <div id="container">
    <h1>React functional component by {name}</h1>
    <Home/>
    {jsxHeading}    
    <Title/>
    {Title()}
  </div>
)



const Home=()=>(
     <h1>Home landing page</h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); //like this functional component render
