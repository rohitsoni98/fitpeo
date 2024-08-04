import {
  ArrowDropDown,
  ArrowDropUp,
  GpsFixed,
  LocalMall,
  LunchDining,
  MenuBook,
  Paid,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";

export const chartData = [
  { name: "1", uv: 4000 },
  { name: "2", uv: 3000 },
  { name: "3", uv: 2000 },
  { name: "4", uv: 2780 },
  { name: "5", uv: 1890 },
  { name: "6", uv: 2390 },
  { name: "7", uv: 3490 },
  // add more data points as needed
];

export const tableData = [
  {
    name: "Wade Warren",
    orderNo: "15478256",
    amount: "$124.00",
    status: "Delivered",
  },
  {
    name: "Jane Cooper",
    orderNo: "48965786",
    amount: "$365.02",
    status: "Delivered",
  },
  {
    name: "Guy Hawkins",
    orderNo: "78958215",
    amount: "$45.88",
    status: "Cancelled",
  },
  {
    name: "Kristin Watson",
    orderNo: "20965732",
    amount: "$65.00",
    status: "Pending",
  },
  {
    name: "Cody Fisher",
    orderNo: "95715620",
    amount: "$545.00",
    status: "Delivered",
  },
  {
    name: "Savannah Nguyen",
    orderNo: "78514568",
    amount: "$128.20",
    status: "Delivered",
  },
];

export const statusStyles = {
  Delivered: {
    backgroundColor: "green",
    color: "white",
    borderRadius: "8px",
    padding: "4px 8px",
  },
  Pending: {
    backgroundColor: "orange",
    color: "white",
    borderRadius: "8px",
    padding: "4px 8px",
  },
  Cancelled: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "8px",
    padding: "4px 8px",
  },
};

export const cardItemList = [
  {
    heading: "Total Orders",
    countIcon: <ArrowDropUp fontSize="small" color="primary" />,
    count: 75,
    countPercentage: 3,
    icon: <ShoppingCart fontSize="small" color="primary" />,
  },
  {
    heading: "Total Delivered",
    countIcon: <ArrowDropDown fontSize="small" color="error" />,
    count: 70,
    countPercentage: 3,
    icon: <ShoppingBag fontSize="small" color="success" />,
  },
  {
    heading: "Total Cancelled",
    countIcon: <ArrowDropUp fontSize="small" color="primary" />,
    count: "05",
    countPercentage: 3,
    icon: <LocalMall fontSize="small" color="error" />,
  },
  {
    heading: "Total Revenue",
    countIcon: <ArrowDropDown fontSize="small" color="error" />,
    count: "$12k",
    countPercentage: 3,
    icon: <Paid fontSize="small" color="warning" />,
  },
];

export const activityList = [
  { heading: "Goals", icon: <GpsFixed color="error" /> },
  { heading: "Popular Dishes", icon: <LunchDining color="primary" /> },
  { heading: "Menus", icon: <MenuBook color="warning" /> },
];

export const customerFeedbackList = [
  {
    name: "Jenny Wilson",
    content:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had aburger over greens (gluten-free) which was also very good.They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    content:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect Service.",
  },
  {
    name: "Devon Lane",
    content:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had aburger over greens (gluten-free) which was also very good.They were very conscientious about gluten allergies.",
  },
];
