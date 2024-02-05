import React from "react";

function CategoryFilter({categories, handleOnClick}) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((item, index)=>(
        <button key={index} onClick={handleOnClick} value={item}>{item}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
