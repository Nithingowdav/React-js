import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import ErrorBoundary from "./ErrorBoundary"; // You'll need to create this component
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"; //importing the context
import { Link } from "react-router-dom";
const proxyUrl = "https://api.allorigins.win/get?url=";
const targetUrl =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

const Body = () => {
  //local state variable = super powerful variable
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body component rendered");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); // higher order component passing

  //useeffect will take two parameters/arugments first one is arrow function and second one is array of dependencies
  // useEffect (() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
  //     );
  //     const json = await data.json();
  //     console.log(json); // Check
  // };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
  //     const data = await response.json();
  //     const parsedData = JSON.parse(data.contents);

  //     console.log("✅ Parsed Swiggy Data:", parsedData);

  //     if (
  //       parsedData?.data?.cards &&
  //       parsedData.data.cards.length > 2 &&
  //       parsedData.data.cards[2]?.data?.data?.cards
  //     ) {
  //       setListOfRestaurants(parsedData.data.cards[2].data.data.cards);
  //     } else {
  //       console.error("❌ Could not find restaurant cards. Please check API structure.");
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //   }
  // };
  //working code
  const fetchData = async () => {
    try {
      const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
      const data = await response.json();
      const parsedData = JSON.parse(data.contents);

      console.log("✅ Parsed Swiggy Data:", parsedData);

      if (parsedData?.data?.cards) {
        // The restaurant cards start from index 3 in the cards array
        // Each restaurant is in card.card.info
        const restaurants = parsedData.data.cards
          .slice(3) // Skip the first 3 non-restaurant cards
          .map((card) => card.card?.card?.info)
          .filter(Boolean); // Remove any undefined entries

        if (restaurants.length > 0) {
          setListOfRestaurants(restaurants);
          setFilteredRestaurant(restaurants);
          console.log("✅ Found restaurants:", restaurants);
        } else {
          console.error("❌ No restaurant data found in the cards");
        }
      } else {
        console.error("❌ Could not find cards array in API response");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("rendering body component"); // first come

  //conditional rendering
  // if(listOfRestaurants.length === 0) {
  //   return(
  //     // <div className="loading">
  //     //   <h1>loading.......</h1>
  //     //   </div>
  //     <Shimmer />
  //   )
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Looks like your offline!! please check your connections;</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext); //useContext is a hook that allows you to access the context value in functional components

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <ErrorBoundary>
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value); //update the value of search text
              }}
              className="border border-solid border-black"
            />
            <button
              className="px-4 py-1 bg-green-100 m-4 rounded-lg"
              onClick={() => {
                //filter the list of restaurants based on the search input
                //search text need usestate variabele and update the value of search text
                console.log(searchText);
                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res?.name?.toLowerCase()?.includes(searchText.toLowerCase())
                );
                // setListOfRestaurants(filteredList);
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button
              className="px-4 py-1 bg-gray-100 rounded-lg"
              onClick={() => {
                // const filteredList = listOfRestaurants.filter(
                //   (res) => res.data.avgRating > 4
                const filteredList = listOfRestaurants.filter(
                  (res) => (res.data?.avgRating || res.avgRating) > 4.5
                );
                setListOfRestaurants(filteredList);

                console.log("listOfRestaurants", listOfRestaurants);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <label>UserName : </label>
            <input
              type="text"
              className="border border-solid border-black"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          {/* <RestaurantCard resName="Megana Foods" cuisine="Biryani, North Indian, Asian"/>
          <RestaurantCard resName="KFC" cuisine="Masth kfc" />
          <RestaurantCard resData={resList[0]}/>
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]}/>
          <RestaurantCard resData={resList[5]}/>
          <RestaurantCard resData={resList[6]}/>
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard /> */}
          {/* {
            resList.map((restaurant) => ( <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))} */}
          {/* {
            listOfRestaurants.map((restaurant) => ( <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))} */}
          {/* {
  listOfRestaurants.map((restaurant) => (
    <RestaurantCard key={restaurant.data?.id || restaurant.id} resData={restaurant} />
  ))
} */}
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.data?.id || restaurant.id}
              to={`/restaurant/${restaurant.data?.id || restaurant.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {restaurant?.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Body;
