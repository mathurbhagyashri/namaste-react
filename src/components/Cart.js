import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearcart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <div className="flex justify-evenly items-center">
        <h1 className="text-2xl font-bold ">Cart</h1>
        <button
          className="p-2 m-2 bg-black shadow-md text-white border-gray-100 rounded-lg"
          onClick={handleClearcart}
        >
          clear cart
        </button>
      </div>
      {cartItems.length == 0 ? (
        <h1 className="w-6/12 m-auto p-4 bg-orange-200 text-2xl  text-black">
          Your cart is empty.
        </h1>
      ) : (
        <div className="w-6/12 m-auto p-4">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
