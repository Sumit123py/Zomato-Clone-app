import React, { useContext, useState } from "react";
import { ProductContext } from "../ProductContext"; // Importing ProductContext
import { Link } from 'react-router-dom'; // Importing Link for routing

const AddTOCart = () => {
  const { CartData, setCartData } = useContext(ProductContext); // Getting CartData and setCartData from ProductContext

  const [QuantityData, setQuantityData] = useState({}); // Initializing state for quantity

  const IncreaseQuantity = (productId) => {
    setQuantityData((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const DecreaseQuantity = (productId) => {
    setQuantityData((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 0),
    }));
  };

  const HandleClearItem = () => {
    setCartData([]); // Clearing the cart by setting it to an empty array
  }

  const HandleDeleteItem = (title) => {
    const ItemIndex  = CartData.indexOf(CartData.find((curitem) => curitem.title === title));
    CartData.splice(ItemIndex, 1); // Removing an item from the cart
    setCartData([...CartData]); // Updating the cart with the modified data
  }

  return (
    <>
      <div className="cartItemList_container">
        <div className="cartItemList">
          <div className="cart_container">
            <div className="cartList_container">
              {CartData !== null ? (CartData.map((curelem, index) => {
                const productId = index; 
                const quantity = QuantityData[productId] || 1;
                return (
                  <>
                    <div key={index} className="cartItem">
                      <div className="item_list">
                        <div className="img">
                          <img
                            src={
                              curelem.image !== ""
                                ? curelem.image
                                : `https://source.unsplash.com/130x130/weekly?${curelem.title}`
                            }
                            alt=""
                          />
                        </div>
                        <div className="item_details">
                          <p className="title">{curelem.title}</p>
                          <div className="rating">
                            {Array.from({ length: 5 }).map((_, index) =>
                              curelem.Rating >= index + 1 ? (
                                <p key={index}>
                                  <i class="fa-solid fa-star"></i>
                                </p>
                              ) : (
                                <p key={index}>
                                  <i class="fa-regular fa-star"></i>
                                </p>
                              )
                            )}
                          </div>
                          <p className="price">{curelem.Price}</p>
                          <p className="cuisine">{curelem.cuisine}</p>
                        </div>
                      </div>
                      <p className="totalPrice">
                        {QuantityData !== null
                          ? "₹" +
                            Number(curelem.Price.replace("₹", "")) * quantity
                          : curelem.Price}
                      </p>
                      <div className="quantity_Btn">
                        <button
                          onClick={() => DecreaseQuantity(productId)}
                          className="btn"
                        >
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <p className="number">{quantity}</p>
                        <button
                          onClick={() => IncreaseQuantity(productId)}
                          className="btn"
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <p onClick={() => HandleDeleteItem(curelem.title)} className="delete-Item"><i class="fa-solid fa-trash"></i></p>
                    </div>
                  </>
                );
              })) : (<>
              <p> hello </p>
              </>)}
            </div>
          </div>
          
        </div>
        <div className="button-actions-container">
          <button onClick={HandleClearItem} class="clear-all-button btn">Clear All</button> {/* Button to clear all items */}
          <Link to='/MainProductPage' class="continue-shopping-button btn">
            Continue Shopping
          </Link> {/* Button to continue shopping */}
        </div>
      </div>
    </>
  );
};

export default AddTOCart;
