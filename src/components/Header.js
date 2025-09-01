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
    <div className="flex justify-between bg-slate-50 shadow-lg mt-2 sm:bg-yellow-100 lg:bg-red-200 ">
      <div className="logo-container">
        <img className="w-56 logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-4">
          <li className="mr-1"> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="grocery">Grocery</Link>
          </li>

          <li className="px-4">
            <Link to="cart">Cart</Link>
          </li>
          <button
            className="rounded-md bg-green-500 p-4 shadow-md"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
