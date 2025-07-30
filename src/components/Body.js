import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import resLists from "../utils/mockData";
import Shimmer from "./Shimmer";

export const Body = () => {
  console.log("searender");

  // local state variable - super powerful variable to create state
  const [listsOfRestaurants, setListsOfRestaurants] = useState(resLists);
   const [serchRestaurantsList, setSerchRestaurantsList] = useState(resLists);

  const [searchtext, setSearchText] = useState("");

  useEffect(() => {
    // fetchData();
    setListsOfRestaurants(resLists);
    setSerchRestaurantsList(resLists)
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   console.warn("json data api", json);

  //   // console.warn(json.data.cards[9].card);

  //   // setListsOfRestaurants(json?.data?.cards[0]? .card.card.imageGridCards.info)
  //   // console.log("atom",json.data.cards[0].card.card.imageGridCards.info);
  // };

  // console.log("listsOfRestaurants", listsOfRestaurants);

  if (listsOfRestaurants.length === 0) {
    return <Shimmer />;
  }
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
              // filter the restaurants card and updtae the ui
              // searchtext
              console.log("searchtext", searchtext);
              const filteredResList = listsOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setSerchRestaurantsList(filteredResList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listsOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            console.log("listsOfRestaurants", listsOfRestaurants);
            setListsOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listsOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
