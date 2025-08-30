const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, sla } = resData?.info;

  const fullImageId = resData?.info?.cloudinaryImageId;

  // Extract the last part after the last "/"
  const imageId = fullImageId?.split("/")?.pop();

  // Build the Cloudinary URL
  const imageUrl = imageId
    ? `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`
    : "https://via.placeholder.com/508x320?text=No+Image";

  // console.log("resData?.info", resData?.info.cloudinaryImageId);

  const CDN_URL =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  return (
    <div
      className="m-4 p-4 bg-gray-100 border w-[200px] h-[360px] rounded-md hover:cursor-pointer hover:bg-gray-200"
    >
      {/* <img src={imageUrl} alt="Restaurant" />; */}
      {/* <img
        // className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      /> */}
      <img
        src="https://freepngimg.com/thumb/pizza/2-pizza-png-image.png"
        alt="Swiggy Logo"
        style={{ width: "150px", height: "auto" }}
      />
      <h3 className="py-4 font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
