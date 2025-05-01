// import { useSelector, useDispatch } from "react-redux";
// import { removeItem, clearCart } from "../utils/cartSlice";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   if (cartItems.length === 0) {
//     return (
//       <div className="p-8 text-center">
//         <h1 className="text-2xl font-bold mb-4">🛒 Your cart is empty</h1>
//         <p className="text-gray-500">Add some delicious food from the menu!</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//         {cartItems.map((item, index) => {
//           const imageUrl = item.imageId
//             ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200/${item.imageId}`
//             : null;

//           return (
//             <div
//               key={`${item.id}-${index}`}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col"
//             >
//               {imageUrl && (
//                 <img
//                   src={imageUrl}
//                   alt={item.name}
//                   className="w-full h-40 object-cover rounded-t-xl"
//                 />
//               )}
//               <div className="p-4 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {item.name}
//                   </h3>
//                   <p className="text-sm text-gray-600 mt-1 min-h-[40px]">
//                     {item.description || "No description available"}
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center mt-4">
//                   <span className="font-bold text-gray-900">
//                     ₹{(item.price ?? item.defaultPrice ?? 0) / 100}
//                   </span>
//                   <button
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-full font-semibold"
//                     onClick={() => dispatch(removeItem(index))}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="text-center mt-8">
//         <button
//           className="bg-black text-white px-5 py-2 rounded-full font-bold"
//           onClick={() => dispatch(clearCart())}
//         >
//           Clear Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import MenuItemCard from "./MenuItemCard";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
  
    if (cartItems.length === 0) {
      return <h2 className="text-center mt-10 text-xl">🛒 Your cart is empty</h2>;
    }
  
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cartItems.map((item, index) => (
            <MenuItemCard
              key={index}
              item={item}
              showRemoveButton={true}
              onRemove={() => dispatch(removeItem(item.id))}
            />
          ))}
        </div>
  
        <div className="text-center mt-8">
          <button
            className="bg-black text-white px-5 py-2 rounded-full font-bold"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    );
  };
  
  export default Cart;

// import { useSelector, useDispatch } from "react-redux";
// import { clearCart, removeItem } from "../utils/cartSlice";
// import MenuItemCard from "./MenuItemCard";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   const handleRemoveItem = (itemId) => {
//     dispatch(removeItem(itemId));
//   };

//   return (
//     <div className="p-8 font-sans min-h-screen bg-gray-100">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
//         {cartItems.length > 0 && (
//           <button
//             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold"
//             onClick={handleClearCart}
//           >
//             Clear Cart
//           </button>
//         )}
//       </div>

//       {cartItems.length === 0 ? (
//         <div className="text-center mt-20">
//           <p className="text-lg text-gray-600 mb-4">Your cart is empty 🥲</p>
//           <Link to="/">
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
//               Go Back to Menu
//             </button>
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {cartItems.map((item, index) => (
//             <MenuItemCard
//               key={`${item.id}-${index}`}
//               item={item}
//               showRemoveButton={true}
//               onRemove={() => handleRemoveItem(item.id)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

  
