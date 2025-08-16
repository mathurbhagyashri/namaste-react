import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this is big object that can have multiple state
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child component Did Mount");
    const data = await fetch("https://api.github.com/users/mathurbhagyashri");

    const json = await data.json();
    console.log("hi8", json);
    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("React OP");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // debugger;

    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
      //code
    }
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    // how to refrence the interval here through the variable
    clearInterval(this.timer);
    console.log("componentWillUnmount Called");
  }

  render() {
    // const { name, location } = this.props;
    console.log(this.props.name + "Child render");
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <div>
          {" "}
          <h2>Name: {name} </h2>
          <h3>Location: {location}</h3>
          <h3>contact: mathurbhagyashri@gmail.com</h3>
        </div>
        <div>
          {" "}
          <img width="145" src={avatar_url} />
        </div>
      </div>
    );
  }
}
export default UserClass;
