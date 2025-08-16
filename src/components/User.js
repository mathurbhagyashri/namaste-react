import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  const [userInfo,setUserInfo]= useState([])

  useEffect(() => {
    // API Call
    getUser();
   let timer= setInterval(() => {
      console.log("React OP888");
    }, 1000);

    console.log("UseEffect");

    return () => {
      clearInterval(timer)
      console.log("UseEffect return");
    };
  }, []);
  console.log("render");

  async function getUser() {
    const data = await fetch("https://api.github.com/users/mathurbhagyashri");
    const json = await data.json();
    console.log("522",json);
    setUserInfo(json)
  }

  const { name, location,avatar_url } = userInfo;
  return (
    <div className="user-card">
      <div>
        <h1>Name: {name} </h1>
      <h2>Location: {location}</h2>
      <h3>contact: bhagyashri@gmail.com</h3>
      </div>
      <div ><img width='145' src={avatar_url} alt="UserImg"/></div>
      {/* <button onClick={() => setCount(count + 1)}>counter</button>
      <h4>count: {count}</h4>
      <h4>count2: {count2}</h4> */}
    </div>
  );
};

export default User;
