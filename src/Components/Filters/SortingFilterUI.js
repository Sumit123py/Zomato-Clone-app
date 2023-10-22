import React, { useState, useContext } from "react";
import Sort from "../data/SortApi"; // Importing Sort data
import { ProductContext } from "../ProductContext"; // Importing ProductContext

const SortingFilter = () => {
  const [SortData] = useState(Sort); // Initializing SortData state with Sort

  const [selected, setSelected] = useState(null); // Initializing selected state with null

  const { setSelectedSort } = useContext(ProductContext); // Getting setSelectedSort function from ProductContext

  const SortSelected = (title) => {
    setSelectedSort(title); // Function to set selected sort value
  };

  return (
    <>
      <div className="right_container">
        {SortData.map((curelem, index) => {
          return (
            <div key={index} onClick={() => setSelected(index)} className="sort_method">
              <div
                onClick={() => SortSelected(curelem.title)}
                style={{
                  border:
                    selected === index
                      ? "1px solid rgb(239, 79, 95)"
                      : "1px solid rgb(156, 156, 156)",
                }}
                className="checkbox"
              >
                <p
                  style={{ display: selected === index ? "block" : "none" }}
                  className="inner_circle"
                ></p>
              </div>
              <p className="title">{curelem.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SortingFilter;
