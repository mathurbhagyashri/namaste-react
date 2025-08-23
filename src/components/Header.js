import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      {/* <button
        style={{
          backgroundColor: onlineStatus ? "green" : "red",
          color: "white", // optional, for better contrast
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          height: "2rem",
          marginTop: "3rem",
        }}
      >
        {onlineStatus ? "Online" : "Offline"}
      </button> */}
      <div className="nav-items">
        <ul>
          <li> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>

          <li>
            <Link to="cart">Cart</Link>
          </li>
          <button
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
            className="login-btn"
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
