import React, { useState } from "react";

function FilterMultiSelect({ item }) {
  console.log(item);
  return (
    <>
      {item?.facetInfo?.map((eachItem) => {
        return (
          <div>
            <label for="track">{eachItem.label}</label>
            <input type="radio" id="track" value="track" />
          </div>
        );
      })}

      <br />
      <br />
    </>
  );
}

function FilterSubItems({ subItems }) {
  console.log(subItems?.facetInfo);
  return (
    <div className="">
      <h1>FilterSubItems</h1>
      <FilterMultiSelect item={subItems} />
    </div>
  );
}

export default FilterSubItems;
