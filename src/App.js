import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

// chunking
// lazy loading
// code splitting
// dynamic import
// on demand loading
//dynamic bundling

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy((()=> import('./components/About')))

const AppLayout = () => {
  const [userName, setuserName] = useState();

  // authentication
  useEffect(() => {
    // make aPI call send user name and password
    const data = {
      name: "Bhagyashri Mathur",
    };
    setuserName(data.name);
  }, []);

  return (
    // Default value
   <UserContext.Provider value={{loggedInUser: userName}}>
   {/* // Bhagyashri in whole app*/}
     <div className="app">
     {/* Elon MUSK in header if header given userContext different  value={{loggedInUser: "Elon MUSK"}}*/} 
      <Header />
\      <Outlet />
      {/* <Footer /> */}
    </div>
   </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading About....</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1 style={{ color: "red" }}>loading grocery..</h1>}
          >
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
