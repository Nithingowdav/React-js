import { LOGO_URL } from "../utils/constant"; //named export
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"; //importing the context


const Header = () => {

// let btnName = "Login";
const [btnNameReact, setBtnNameReact] = useState("Login"); //useState is a hook that allows you to add state to functional components
console.log("Header component rendered");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext); //useContext is a hook that allows you to access the context value in functional components
console.log("UserContext", loggedInUser); //accessing the context value

//if no dependency array => useEffect is called on every render
  //if dependency array is empty => useEffect is called only once when the component mounts(initial render) just once
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  //if dependency array has some value => useEffect is called when the value in the array changes every time brnNameReact is updated will trigger the useEffect
  useEffect(() => {
    console.log("useEffect called");
    }, [btnNameReact]);

    return ( // Add return statement
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <div className="logo-container">
          <img className="w-30 shadow-lg px-3" src= {LOGO_URL} />
        </div>
        <div className="flex items-center">
          <ul className="flex py-10 px-10 space-x-4">
            <li className="px-4">Online Status: {onlineStatus ? "✅" : "❌"}</li>
            <li className="px-4"> <Link to="/">Home</Link></li>
            <li className="px-4">
            <Link to="/about">About Us</Link></li>
            <li className="px-4">
            <Link to="/contact">Contact us</Link></li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={() => {
              // setBtnNameReact("Logout");// it will change to login as logout  // btnName == "Logout" 
              // console.log("logout")
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); // if btnName is login then set it to logout else set it to login
              console.log("logout")
            }}>{btnNameReact}</button>
            <li className="px-4 text-2xl">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  // const Header = () => {
//         return ( // Add return statement
//           <div className="header">
//             <div className="logo-container">
//               <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
//             </div>
//             <div className="nav-items">
//               <ul>
//                 <li> Home</li>
//                 <li>About Us</li>
//                 <li>Contact Us</li>
//                 <li>Cart</li>
//               </ul>
//             </div>
//           </div>
//         );
//       };


export default Header;