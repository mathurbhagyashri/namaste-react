import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

import { Footer } from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense } from "react";

// chunking
// lazy loading
// code splitting
// dynamic import
// on demand loading
//dynamic bundling

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy((()=> import('./components/About')))

const AppLayout = () => {
  // console.log("BODY", <Body />);

  return (
    <div className="app">
      <Header />
      {/* if path=/ */}
      {/* <Body /> */}
      {/* if path is /about or /contact */}
      {/* <About/> */}
      <Outlet/>
      {/* <Footer /> */}
    </div>
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
