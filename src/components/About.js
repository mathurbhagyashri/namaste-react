import { Component } from "react";
import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent component Did Mount");
  }
  render() {
    // console.log("Parent render");

    return (
      <div>
        <h1>About class Component</h1>
        <UserContext.Consumer>
          {({loggedInUser})=><h1 className="font-bold">User : {loggedInUser}</h1>}
        </UserContext.Consumer>
        <p>namaste React series </p>
        <UserClass name={"First"} location={"Indore (class)"} />
        {/* <User name={"Shri"} location={"Indore (class)"} /> */}
      </div>
    );
  }
}

export default About;
