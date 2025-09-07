import ItemList from "./ItemList";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RestaurantCategory = ({ data }) => {
  const [showItemList, setShowItemList] = useState(false);
  const handleClick = () => {
    setShowItemList(!showItemList);
  };
  console.log("data", data);
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto p-4 my-4 bg-gray-50 shadow-lg ">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg text-black-100">
            {data.title} ({data.itemCards.length})
          </span>
          {showItemList ? (
            <FaChevronUp className="text-lg text-gray-600 cursor-pointer " />
          ) : (
            <FaChevronDown className="text-lg text-gray-600 cursor-pointer" />
          )}
        </div>

        {/* Accordian body */}
        {showItemList && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
