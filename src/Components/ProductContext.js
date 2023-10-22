import React, { createContext, useState } from "react";
import AllRestaurants from "./data/AllRestaurants";

// Create a context with an initial value of null
const ProductContext = createContext(null);

// Define a Provider component that will wrap around other components
const ProductProvider = ({ children }) => {
  // Define and initialize various state variables
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState([]);
  const [SelectedSort, setSelectedSort] = useState(null);
  const [SelectedRating, setSelectedRating] = useState(null);
  const [ShowFilterList, setShowFilterList] = useState(null);
  const [SelectedCost, setSelectedCost] = useState(null);
  const [Ordervalue, setOrderValue] = useState(
    Number(sessionStorage.getItem("Ordervalue"))
  );
  const [ShowSignUp, setShowSignUp] = useState(false);
  const [ShowLogin, setShowLogin] = useState(false);
  const [ShowExpandedImage, setShowExpandedImage] = useState(false);
  const [BookMarkData, setBookMarkData] = useState([]);
  const [SelectedBookMark, setSelectedBookMark] = useState([]);
  const [name, setName] = useState([]);
  const [Password, setPassword] = useState(null);
  const [FullName, setFullName] = useState(null);
  const [SignUpData, setSignUpData] = useState([]);
  const [CartData, setCartData] = useState([]);
  const [Authenticated, setAuthenticated] = useState(false);

  // Initialize state variables related to data and sorting
  const [SortingData] = useState(AllRestaurants);
  const [SortedData, setSortedData] = useState(SortingData);
  const [CuisineData, setCuisineData] = useState(SortedData);
  const [RatingData, setRatingData] = useState(CuisineData);
  const [DeliveryRestaurantProductPageData, setDeliveryRestaurantProductPageData] = useState([]);
  const [DiningRestaurantProductPageData, setDiningRestaurantProductPageData] = useState([]);
  const [NightlifeRestaurantProductPageData, setNightlifeRestaurantProductPageData] = useState([]);
  const [RestaurantSearchData, setRestaurantSearchData] = useState(null);

  // Provide all the state variables and their respective setter functions to the context
  return (
    <ProductContext.Provider
      value={{
        value,
        setValue,
        checked,
        setChecked,
        SelectedSort,
        setSelectedSort,
        ShowFilterList,
        setShowFilterList,
        SelectedRating,
        setSelectedRating,
        SelectedCost,
        setSelectedCost,
        SortingData,
        CuisineData,
        setCuisineData,
        RatingData,
        setRatingData,
        SortedData,
        setSortedData,
        DeliveryRestaurantProductPageData,
        setDeliveryRestaurantProductPageData,
        RestaurantSearchData,
        setRestaurantSearchData,
        Ordervalue,
        setOrderValue,
        ShowSignUp,
        setShowSignUp,
        ShowLogin,
        setShowLogin,
        ShowExpandedImage,
        setShowExpandedImage,
        BookMarkData,
        setBookMarkData,
        SelectedBookMark,
        setSelectedBookMark,
        name,
        setName,
        Password,
        setPassword,
        FullName,
        setFullName,
        SignUpData,
        setSignUpData,
        Authenticated,
        setAuthenticated,
        DiningRestaurantProductPageData,
        setDiningRestaurantProductPageData,
        NightlifeRestaurantProductPageData,
        setNightlifeRestaurantProductPageData,
        CartData, 
        setCartData
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Export the Provider component and the ProductContext for use in other parts of the application
export { ProductProvider, ProductContext };
