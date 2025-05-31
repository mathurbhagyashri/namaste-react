import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://ts3.mm.bing.net/th?id=OIP.MipNN6QB1cCRU0YCCQtnQQHaHa&pid=15.1"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = [
  {
    type: "restaurant",
    data: {
      id: 1,
      name: "Tandoori Tales",
      locality: "MG Road",
      areaName: "Indore",
      costForTwo: "₹500 for two",
      cuisine: ["North Indian", "Tandoori", "Mughlai"],
      avgRating: 4.5,
      deliveryTime: "28 minutes",
      imgLink:
        "https://th.bing.com/th/id/OIP.LvohrVhoQD-r49I-754TeAHaE3?w=279&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      feeDetails: {
        restaurantId: "67502",
        title: "Delivery Charge",
        amount: "₹40",
      },
    },
  },
  {
    type: "restaurant",
    data: {
      id: 2,
      name: "Biryani Hub",
      locality: "Vijay Nagar",
      areaName: "Indore",
      costForTwo: "₹400 for two",
      cuisine: ["Biryani", "Kebabs", "Hyderabadi"],
      avgRating: 4.2,
      deliveryTime: "34 minutes",
      imgLink:
        "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
      feeDetails: {
        restaurantId: "67503",
        title: "Delivery Charge",
        amount: "₹30",
      },
    },
  },
  {
    type: "restaurant",
    data: {
      id: 3,
      name: "Pizza Paradise",
      locality: "Bhawar Kuan",
      areaName: "Indore",
      costForTwo: "₹350 for two",
      cuisine: ["Pizza", "Pasta", "Italian"],
      avgRating: 4.0,
      deliveryTime: "30 minutes",
      imgLink:
        "https://th.bing.com/th/id/OIP.OGp6EdS2X0KlxO1GBTIoPwHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      feeDetails: {
        restaurantId: "67504",
        title: "Delivery Charge",
        amount: "₹20",
      },
    },
  },
  {
    type: "restaurant",
    data: {
      id: 4,
      name: "Chaat Junction",
      locality: "Rajwada",
      areaName: "Indore",
      costForTwo: "₹150 for two",
      cuisine: ["Street Food", "Chaat", "Snacks"],
      avgRating: 4.1,
      deliveryTime: "25 minutes",
      imgLink:
        "https://th.bing.com/th/id/OIP.E4CMg7wgIi1XXD4nIzFJPgHaFK?w=299&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      feeDetails: {
        restaurantId: "67505",
        title: "Delivery Charge",
        amount: "₹0",
      },
    },
  },
  {
    type: "restaurant",
    data: {
      id: 5,
      name: "Sweet Treats",
      locality: "Sapna Sangeeta",
      areaName: "Indore",
      costForTwo: "₹250 for two",
      cuisine: ["Desserts", "Bakery", "Ice Cream"],
      avgRating: 4.6,
      deliveryTime: "20 minutes",
      imgLink:
        "https://th.bing.com/th/id/OIP.jPLU1Sku9i8qs7bjyxD37wHaG9?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      feeDetails: {
        restaurantId: "67506",
        title: "Delivery Charge",
        amount: "₹25",
      },
    },
  },
   {
    type: "restaurant",
    data: {
      id: 6,
      name: "Biryani Hub",
      locality: "Vijay Nagar",
      areaName: "Indore",
      costForTwo: "₹400 for two",
      cuisine: ["Biryani", "Kebabs", "Hyderabadi"],
      avgRating: 4.2,
      deliveryTime: "34 minutes",
      imgLink:
        "https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg",
      feeDetails: {
        restaurantId: "67503",
        title: "Delivery Charge",
        amount: "₹30",
      },
    },
  },
  {
    type: "restaurant",
    data: {
      id: 7,
      name: "Pizza Paradise",
      locality: "Bhawar Kuan",
      areaName: "Indore",
      costForTwo: "₹350 for two",
      cuisine: ["Pizza", "Pasta", "Italian"],
      avgRating: 4.0,
      deliveryTime: "30 minutes",
      imgLink:
        "https://th.bing.com/th/id/OIP.OGp6EdS2X0KlxO1GBTIoPwHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      feeDetails: {
        restaurantId: "67504",
        title: "Delivery Charge",
        amount: "₹20",
      },
    },
  },
  {
    type: "restaurant",
    data: {
      id: 8,
      name: "Chaat Junction",
      locality: "Rajwada",
      areaName: "Indore",
      costForTwo: "₹150 for two",
      cuisine: ["Street Food", "Chaat", "Snacks"],
      avgRating: 4.1,
      deliveryTime: "25 minutes",
      imgLink:
        "https://th.bing.com/th/id/OIP.E4CMg7wgIi1XXD4nIzFJPgHaFK?w=299&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      feeDetails: {
        restaurantId: "67505",
        title: "Delivery Charge",
        amount: "₹0",
      },
    },
  },
  {
    type: "restaurant",
    data: {
      id: 10,
      name: "Sweet Treats",
      locality: "Sapna Sangeeta",
      areaName: "Indore",
      costForTwo: "₹250 for two",
      cuisine: ["Desserts", "Bakery", "Ice Cream"],
      avgRating: 4.6,
      deliveryTime: "20 minutes",
      imgLink:
        "https://th.bing.com/th/id/OIP.jPLU1Sku9i8qs7bjyxD37wHaG9?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      feeDetails: {
        restaurantId: "67506",
        title: "Delivery Charge",
        amount: "₹25",
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, avgRating, costForTwo, deliveryTime, imgLink } =
    resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-img" src={imgLink} />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h2>© 2025 Foods Limited</h2>
      <h2>Available in: 679+ cities</h2>
      <h2>Social Links</h2>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
