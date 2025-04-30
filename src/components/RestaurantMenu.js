// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=654809&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     console.log("✅ Full Response:", json);

//     setResInfo(json?.data);
//   };

//   if (!resInfo) return <Shimmer />;

//   // ✅ Dynamically find restaurant info
//   const info = resInfo?.cards?.find(
//     (card) => card?.card?.card?.info?.name
//   )?.card?.card?.info;

//   // ✅ Extract real menu items
//   const menuCards =
//     resInfo?.cards
//       ?.find((c) => c.groupedCard)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   const itemCards = menuCards
//     .filter(
//       (c) =>
//         c?.card?.card["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     )
//     .flatMap((c) => c?.card?.card?.itemCards || []);

//   return (
//     <div className="restaurant-details" style={{ padding: "20px", fontFamily: "sans-serif" }}>
//       <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>{info?.name}</h1>
//       <p style={{ color: "#666" }}>
//         🍽 {info?.cuisines?.join(", ")} | 📍 {info?.areaName}
//       </p>
//       <p style={{ marginBottom: "20px", color: "#444" }}>
//         💰 {info?.costForTwoMessage}
//       </p>

//       <h2 style={{ marginBottom: "10px" }}>📋 Menu</h2>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {itemCards?.map((item, index) => {
//           const menuItem = item.card.info;
//           return (
//             <li
//               key={`${menuItem.id}-${index}`} // Combine id and index for unique key
//               style={{
//                 padding: "10px 0",
//                 borderBottom: "1px solid #eee",
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <span>{menuItem.name}</span>
//               <span>
//                 ₹
//                 {menuItem.price
//                   ? menuItem.price / 100
//                   : menuItem.defaultPrice / 100}
//               </span>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;

// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=654809&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     setResInfo(json?.data);
//   };

//   if (!resInfo) return <Shimmer />;

//   const info = resInfo?.cards?.find(
//     (card) => card?.card?.card?.info?.name
//   )?.card?.card?.info;

//   const menuCards =
//     resInfo?.cards
//       ?.find((c) => c.groupedCard)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   const itemCategories = menuCards.filter(
//     (c) =>
//       c?.card?.card["@type"] ===
//       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   );

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>{info?.name}</h1>
//       <p style={{ color: "#666" }}>
//         🍽 {info?.cuisines?.join(", ")} | 📍 {info?.areaName}
//       </p>
//       <p style={{ marginBottom: "20px", color: "#444" }}>
//         💰 {info?.costForTwoMessage}
//       </p>

//       <h2 style={{ margin: "20px 0 10px" }}>📋 Menu</h2>

//       {itemCategories.map((category) => (
//         <div key={category.card.card.title}>
//           <h3 style={{ color: "#444", marginTop: "25px" }}>
//             🍴 {category.card.card.title}
//           </h3>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//               gap: "20px",
//               marginTop: "10px",
//             }}
//           >
//             {category.card.card.itemCards.map((itemCard, index) => {
//               const item = itemCard.card.info;
//               const imageUrl = item.imageId
//                 ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208/${item.imageId}`
//                 : null;

//               return (
//                 <div
//                   key={`${item.id}-${index}`}
//                   style={{
//                     border: "1px solid #ddd",
//                     borderRadius: "10px",
//                     padding: "15px",
//                     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                     display: "flex",
//                     gap: "15px",
//                     backgroundColor: "#fff",
//                   }}
//                 >
//                   {imageUrl && (
//                     <img
//                       src={imageUrl}
//                       alt={item.name}
//                       style={{ width: "100px", height: "100px", borderRadius: "8px", objectFit: "cover" }}
//                     />
//                   )}
//                   <div style={{ flex: 1 }}>
//                     <h4 style={{ margin: "0 0 5px", color: "#333" }}>{item.name}</h4>
//                     <p style={{ margin: "0 0 5px", color: "#777", fontSize: "14px" }}>
//                       {item.description || "No description available"}
//                     </p>
//                     <p style={{ margin: "5px 0", fontWeight: "bold" }}>
//                       ₹
//                       {(item.price ?? item.defaultPrice ?? 0) / 100}
//                     </p>
//                     {item.ratings?.aggregatedRating?.rating && (
//                       <p style={{ margin: "0", color: "#f39c12", fontSize: "14px" }}>
//                         ⭐ {item.ratings.aggregatedRating.rating} (
//                         {item.ratings.aggregatedRating.ratingCount} ratings)
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;


// //import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// //import { MENU_API } from "../utils/constant";
// import useRestaurantMenu from "../utils/useRestaurantMenu";


// const RestaurantMenu = () => {
//   //const [resInfo, setResInfo] = useState(null);
//     const { resId } = useParams(); // Get the restaurant ID from the URL

//     const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //       MENU_API + resId // Use the restaurant ID in the API URL
  //   );
  //   const json = await data.json();
  //   setResInfo(json?.data);
  // };

//   if (!resInfo) return <Shimmer />;

//   const info = resInfo?.cards?.find(
//     (card) => card?.card?.card?.info?.name
//   )?.card?.card?.info;

//   const menuCards =
//     resInfo?.cards
//       ?.find((c) => c.groupedCard)
//       ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//   const itemCategories = menuCards.filter(
//     (c) =>
//       c?.card?.card["@type"] ===
//       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   );

//   return (
//     <div style={{ padding: "30px", fontFamily: "Inter, sans-serif", backgroundColor: "#f7f7f7" }}>
//       <div style={{ marginBottom: "30px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
//         <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#222" }}>{info?.name}</h1>
//         <p style={{ color: "#666", fontSize: "16px" }}>
//           🍽 {info?.cuisines?.join(", ")} | 📍 {info?.areaName}
//         </p>
//         <p style={{ fontSize: "16px", marginTop: "6px", color: "#333" }}>
//           💰 {info?.costForTwoMessage}
//         </p>
//       </div>

//       {itemCategories.map((category) => (
//         <div key={category.card.card.title}>
//           <h2 style={{ fontSize: "24px", margin: "30px 0 15px", color: "#222" }}>
//             🍴 {category.card.card.title}
//           </h2>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//               gap: "20px",
//             }}
//           >
//             {category.card.card.itemCards.map((itemCard, index) => {
//               const item = itemCard.card.info;
//               const imageUrl = item.imageId
//                 ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200/${item.imageId}`
//                 : null;

//               return (
//                 <div
//                   key={`${item.id}-${index}`}
//                   style={{
//                     backgroundColor: "#fff",
//                     borderRadius: "14px",
//                     boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
//                     overflow: "hidden",
//                     transition: "transform 0.2s",
//                     display: "flex",
//                     flexDirection: "column",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
//                   onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
//                 >
//                   {imageUrl && (
//                     <img
//                       src={imageUrl}
//                       alt={item.name}
//                       style={{
//                         width: "100%",
//                         height: "160px",
//                         objectFit: "cover",
//                       }}
//                     />
//                   )}
//                   <div style={{ padding: "15px" }}>
//                     <h3 style={{ fontSize: "18px", color: "#333", marginBottom: "6px" }}>
//                       {item.name}
//                     </h3>
//                     <p style={{ fontSize: "14px", color: "#666", marginBottom: "10px", minHeight: "40px" }}>
//                       {item.description || "No description available"}
//                     </p>
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                       <span style={{ fontWeight: "bold", color: "#111" }}>
//                         ₹{(item.price ?? item.defaultPrice ?? 0) / 100}
//                       </span>
//                       {item.ratings?.aggregatedRating?.rating && (
//                         <span
//                           style={{
//                             backgroundColor: "#48c479",
//                             color: "#fff",
//                             borderRadius: "12px",
//                             padding: "3px 10px",
//                             fontSize: "12px",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           ⭐ {item.ratings.aggregatedRating.rating}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;

import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (title) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  if (!resInfo) return <Shimmer />;

  const info = resInfo?.cards?.find(
    (card) => card?.card?.card?.info?.name
  )?.card?.card?.info;

  const menuCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCategories = menuCards.filter(
    (c) =>
      c?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(itemCategories);

  return (
    <div className="p-8 font-sans bg-gray-100 min-h-screen text-center">
      <div className="mb-8 bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">{info?.name}</h1>
        <p className="text-gray-600 text-lg">
          🍽 {info?.cuisines?.join(", ")} | 📍 {info?.areaName}
        </p>
        <p className="text-gray-700 text-md mt-1">💰 {info?.costForTwoMessage}</p>
      </div>

      {itemCategories.map((category) => {
        const title = category.card.card.title;
        const items = category.card.card.itemCards || [];

        return (
          <div key={title} className="mb-6">
            <div
              className="flex justify-between items-center cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition"
              onClick={() => toggleCategory(title)}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                🍴 {title} ({items.length})
              </h2>
              <span className="text-gray-600 text-lg">
                {expandedCategory === title ? "▲" : "▼"}
              </span>
            </div>

            {expandedCategory === title && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4">
                {items.map((itemCard, index) => {
                  const item = itemCard.card.info;
                  const imageUrl = item.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200/${item.imageId}`
                    : null;

                  return (
                    <div
                      key={`${item.id}-${index}`}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
                    >
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={item.name}
                          className="w-full h-40 object-cover rounded-t-xl"
                        />
                      )}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-600 mt-1 min-h-[40px]">
                            {item.description || "No description available"}
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <span className="font-bold text-gray-900">
                            ₹{(item.price ?? item.defaultPrice ?? 0) / 100}
                          </span>
                          {item.ratings?.aggregatedRating?.rating && (
                            <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                              ⭐ {item.ratings.aggregatedRating.rating}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

