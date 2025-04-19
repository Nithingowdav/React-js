import { LOGO_URL } from "../utils/constant"; //named export
import { useState } from "react";

const Header = () => {

// let btnName = "Login";
const [btnNameReact, setBtnNameReact] = useState("Login"); //useState is a hook that allows you to add state to functional components
console.log("Header component rendered");

    return ( // Add return statement
      <div className="header">
        <div className="logo-container">
          <img className="logo" src= {LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li> Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              // setBtnNameReact("Logout");// it will change to login as logout  // btnName == "Logout" 
              // console.log("logout")
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login"); // if btnName is login then set it to logout else set it to login
              console.log("logout")
            }}>{btnNameReact}</button>  
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