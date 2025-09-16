import { useState } from "react";
import { CDN_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {

  // const [AddItems, setAddItems] = useState(false);

  const dispatch= useDispatch();
  const handleAddItem = (item) => {
    // setAddItems(true);

    // dispatch an action
    dispatch(addItem(item))
     
  };
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-gray-200 flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-left pl-4">
              <span className="text-sm font-bold">
                {" "}
                {item?.card?.info?.name}
              </span>
              <span className="pl-2">
                - ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>

              <p className="text-xs text-left pt-2">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
          <div className="w-3/12 relative">
            <img
              className="w-full rounded-md"
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
            <div className="absolute inset-0 flex items-end justify-center pt-4">
              {/* {!AddItems && ( */}
                <button
                  className="p-2 shadow-lg text-green-600 font-bold bg-white rounded-md px-3 py-1 text-sm"
                  onClick={()=>handleAddItem(item)}
                >
                  Add +
                </button>
              {/* )} */}

              {/* {AddItems && (
                <div className="flex p-2 shadow-lg text-green-600 font-bold bg-white rounded-md px-3 py-1 text-sm">
                  <button>-</button>
                  <p className="px-4">1</p>
                  <button>+</button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
