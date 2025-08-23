import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage, sla } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  //  for recommended
  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap.REGULAR?.cards?.[2]?.card
      ?.card || {};

  //    -- for deserts
  //   const {itemcards}= resInfo?.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards[21].card.card.itemCards || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage} - {sla?.deliveryTime}{" "}
        Minutes
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
