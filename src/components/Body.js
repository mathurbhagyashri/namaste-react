import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";

const Body = () => {
  // local state variable - super powerful variable to create state
  const [listsOfRestaurants, setListsOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("listsOfRestaurants24", listsOfRestaurants);

  const [searchtext, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

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

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
        OOPS! You are offline, Please connect to internet connection.
      </h1>
    );
  return (
    <div className="p-4">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black text-center py-1"
            type="text"
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-4 px-4 py-2 bg-green-100 text-center rounded-lg	"
            onClick={() => {
              // filter the restaurants card and update the ui
              // searchtext
              console.log("searchtext", searchtext);
              const filteredRestaurants = listsOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="bg-gray-100 px-4 py-2 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is promoted type:"C" then add apromoted label to it  */}
            {restaurant.info.type == "F" ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
