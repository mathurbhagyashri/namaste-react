/* <div id="parent">
<div id="child">
* <h1>I am H1 tag</h1> 
 <h2>I am H2 tag</h2> 
 </div>
 <div id="child2">
* <h1>I am child2 H1 tag</h1> 
 <h2>I am child2 H2 tag</h2> 
 </div>
 </div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 tag "),
    React.createElement("h2", { id: "heading" }, "h2 tag "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "newText" }, "i am child2"),
    React.createElement("h1", { id: "newText" }, "i am child2's sibling"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "learning React episode 1"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
