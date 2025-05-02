import { useContext } from "react";
import { CDN_URL } from "../utils/constant"; // NAMED EXPORT
import UserContext from "../utils/UserContext";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext); // Accessing the context value using useContext hook
  console.log("UserContext", loggedInUser); // Accessing the context value using useContext hook

  // const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resData?.data;

  // Handle both API structures:
  // 1. Live API (direct properties)
  // 2. Mock data (nested under .data)
  const restaurantInfo = resData.data || resData;

  const {
    cloudinaryImageId = "",
    name = "",
    cuisines = [],
    avgRating = 0,
    sla = {},
    costForTwo = "",
  } = restaurantInfo;

  const deliveryTime = sla?.deliveryTime || 0;

  return (
    <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(", ")}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>{resData.data.deliveryTime} minutes</h4> */}
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

//destructing the props
// const RestaurantCard = (resName, cuisine) => {
//   return(
//     <div className="res-card" style={styleCard}>
//       <img className="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xqwpuhgnsaf18te7zvtv" alt="res-logo" />
//       <h3>{resName}</h3>
//       <h4>{cuisine}</h4>
//       <h4>4.4 Stars</h4>
//       <h4>38 Minutes</h4>
//     </div>
//   )
// }

//const styleCard = {
//         backgroundColor : "#f0f0f0",
//       }

//       const RestaurantCard = () => {
//         return(
//           <div className="res-card" style={styleCard}>
//             <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/druwjzmfmz7qvepq3bkr" alt="res-logo" />
//             <h3>Meghana Foods</h3>
//             <h4>Biryani, North Indian, Asian</h4>
//             <h4>4.4 Stars</h4>
//             <h4>38 Minutes</h4>
//           </div>
//         )
//       }

//       const Body = () => {
//         return(
//           <div className="body">
//             <div className="Search">Search</div>
//             <div className="res-container">
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               <RestaurantCard />
//               {/* <RestaurantCard />
//               <RestaurantCard /> */}

//             </div>
//           </div>
//         )
//       }

//higher order component
//input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
