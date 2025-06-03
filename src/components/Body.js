import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";
import resLists from '../utils/mockData'

export const Body = () => {
  const [listsOfRestaurants, setListsOfRestaurants] = useState(resLists);
  return (
    <div className="body">
      <div className="filter">
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
