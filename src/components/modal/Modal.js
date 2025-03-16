import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSubItems from "./FilterSubItems";
import { setFilterModalOpen } from "../../redux/slices/restaurantsSlice";
const Modal = () => {
  const filterItems = useSelector((store) => store.restaurants?.setFilterItems);
  const [selectedFilter, setSelectedFilter] = useState();

  const dispatch = useDispatch();

  function changeModalState(e) {
    if (e) {
      e.stopPropagation();
    } else {
      dispatch(setFilterModalOpen());
    }
  }

  function onClickSubFilter(item) {
    setSelectedFilter(item);
  }
  useEffect(() => {
    setSelectedFilter(filterItems?.facetList[0]);
  }, [filterItems]);
  return (
    <div
      className="bg-black/50 w-screen h-full fixed z-10 flex justify-center items-center"
      onClick={(e) => changeModalState()}
    >
      <div
        className="bg-white w-1/2 h-[400px] border-b rounded-3xl overflow-hidden flex flex-col"
        onClick={(e) => changeModalState(e)}
      >
        <div className="border-b">
          <h1 className="text-2xl font-bold p-[15]">Filter</h1>
        </div>
        <div className="flex overflow-scroll w-full">
          <div className="p-[10] text-l font-semibold border-r h-full overflow-y-auto">
            <ul>
              {filterItems?.facetList?.map((item) => {
                return (
                  <li
                    className="p-[12] cursor-pointer text-xl"
                    onClick={() => onClickSubFilter(item)}
                  >
                    {item?.label}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="p-[20] h-full overflow-scroll">
            <FilterSubItems subItems={selectedFilter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
