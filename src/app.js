// const heading = React.createElement('div', { id: 'parent' }, [
//      React.createElement('div', { id: 'child1' }, [
//     React.createElement('h1', {}, 'Hello World!!'),
//      React.createElement('h1', {}, 'Namaskara'),
//      React.createElement('a', {href: 'https://www.google.com'}, 'Google')]),
//      React.createElement('div', { id: 'child2' }, [
//         React.createElement('h1', {}, 'Hello World!!'),
//         React.createElement('p', {}, 'This is a paragraph'),
// ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

//       const root = ReactDOM.createRoot(document.getElementById("root"));
//       root.render(<AppLayout />);

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [message, setMessage] = useState("");

//   const number = 1000;

//   // Array of motivational quotes
//   const quotes = [
//     "💡 Believe you can and you're halfway there.",
//     "🚀 Push yourself, because no one else is going to do it for you.",
//     "🔥 Great things never come from comfort zones.",
//     "🌱 Don't watch the clock. Do what it does. Keep going.",
//     "🎯 Success is not for the lazy. Stay consistent!"
//   ];

//   const Title = () => (
//  <h1>�� Welcome to React Namaste (Motivation Machine)</h1>
//   )

//   const Title1 = () => {
//     return <h1>👋 Welcome to React Namaste (Motivation Machine)</h1>;
//   };

//   // Function to show a random quote
//   const showRandomQuote = () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     setMessage(quotes[randomIndex]);
//   };

//   // Function to show current date/time
//   const showDateTime = () => {
//     const now = new Date().toLocaleString();
//     setMessage(🕒 Current Date & Time: ${now});
//   };

//   // Reset message
//   const resetMessage = () => {
//     setMessage("");
//   };

//   // Auto-clear the message after 5 seconds
//   useEffect(() => {
//     if (message !== "") {
//       const timer = setTimeout(() => {
//         setMessage("");
//       }, 5000);

//       return () => clearTimeout(timer); // clear timer if message changes
//     }
//   }, [message]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>

//         <Title />
//         <Title1 />
//         <p>{number}</p>

//       <h1>🔥 React Namaste - Motivation Machine</h1>

//       <div style={{ marginBottom: "20px" }}>
//         <button onClick={showRandomQuote} style={{ margin: "5px" }}>💬 Random Quote</button>
//         <button onClick={showDateTime} style={{ margin: "5px" }}>🕒 Show Date/Time</button>
//         <button onClick={resetMessage} style={{ margin: "5px" }}>🗑 Reset</button>
//       </div>

//       {message && <p style={{ fontSize: "18px", color: "#333" }}>{message}</p>}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
//import Grocery from './components/Grocery';
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //make an api call and send username and password
    const data = {
      name: "Nithin Gowda",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    {/* default value for the context */}
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* // Nithin Gowda */}
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Jogi Gowda" }}>
          {/* Jogi gowda in header */}
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
