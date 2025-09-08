import { Navigate } from "react-router-dom";
import Listing from "../components/listing";
import Platenumberdetail from "../components/platedetail";

const nonAuthroutes = [
    {
    path: "/",
    exact: true,
    component: <Navigate to="/platelist" />,
    },
    { path: "/platelist", component: <Listing /> },
    { path: "/platedetails", component: <Platenumberdetail /> }
];


export {nonAuthroutes}