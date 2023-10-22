import React from "react";
import ProductPage from "./ProductPage"; // Importing the ProductPage component
import NavbarTopHead from "./NavbarTopHead"; // Importing the NavbarTopHead component

const MainProductPage = () => {
    return(
        <>
        <NavbarTopHead/> {/* Render the NavbarTopHead component */}
        <ProductPage/> {/* Render the ProductPage component */}
        </>
    )
}

export default MainProductPage; // Export the MainProductPage component
