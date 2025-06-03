const resList = [
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
      avgRating: 3.1,
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

export default resList;