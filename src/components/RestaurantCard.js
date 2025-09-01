const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resgssgasga",resData.info.name)
 const { name, avgRating, cuisines, costForTwo, sla } = resData?.info || {};

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
    <div className="m-4 p-4 bg-gray-100 border w-[200px] h-[360px] rounded-md hover:cursor-pointer hover:bg-gray-200 hover:z-10 transform transition-transform duration-300 hover:scale-105">
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

// Higher Order component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative inline-block">
        {/* Badge sits on top of the card */}
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-md z-20 shadow-md transform transition-transform duration-300 hover:scale-105">
          Promoted
        </span>

        {/* Card content below */}
        <RestaurantCard {...props} />
      </div>
    );
  };
};


export default RestaurantCard;
