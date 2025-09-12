import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]= useState(null);

  const { name, cuisines, costForTwoMessage, sla } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  //  for recommended
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap.REGULAR?.cards?.[2]?.card
      ?.card || {};
  console.log("itemCards", itemCards);
  //    -- for deserts
  //   const {itemcards}= resInfo?.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards[21].card.card.itemCards || {};

  const categoriesInitial =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap.REGULAR?.cards;

  console.log("categoriesInitial", categoriesInitial);

  const categories = categoriesInitial?.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log("categories", categories);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="p-4 text-center">
      <h1 className="font-bold my-3 text-2xl">{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage} - {sla?.deliveryTime}{" "}
        Minutes
      </p>

      {/* {categories accordian} */}
      {categories.map((category, index) => (

        // Controlled component - restaurant state is controlled from here ---only the index cliicked is open 
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card.title}
          showItems={index === showIndex ? true : false}
        setShowIndex={()=>{setShowIndex(index)
        }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
