import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 const  Body = () => {
  // local state variable - super powerful variable to create state
  const [listsOfRestaurants, setListsOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchtext, setSearchText] = useState("");
  const onlineStatus= useOnlineStatus();

  // whenever state variable update, react triggers a reconcillation cycle (re-renders the component)
  console.log("Body render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.warn("json data api", json);

    console.warn(
      "ready",
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setListsOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listsOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  if(onlineStatus === false) return  (
        <h1 style={{ textAlign: "center",marginTop:'1rem' }}>
          OOPS! You are offline, Please connect to internet connection.
        </h1>
      );
  return (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input
                className="search-box"
                type="text"
                value={searchtext}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  // filter the restaurants card and update the ui
                  // searchtext
                  console.log("searchtext", searchtext);
                  const filteredRestaurants = listsOfRestaurants.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchtext.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurants);
                }}
              >
                search
              </button>
            </div>
            <button
              className="filter-btn"
              onClick={() => {
                const filteredList = listsOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.3
                );
                console.log("filteredList89988", filteredList);
                setFilteredRestaurant(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
          <div className="res-container">
            {filteredRestaurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            ))}
          </div>
        </div>
   );
};

export default Body;