import Search from "./Search";
import PureVegFilter from "./PureVegFilter";
import TopRatedFilter from "./TopRatedFilter";
import NewOnSwiggy from "./NewOnSwiggy";
import { useDispatch } from "react-redux";
import { LuSettings2 } from "react-icons/lu";
import { setFilterModalOpen } from "../../redux/slices/restaurantsSlice";

const FilterSection = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <button
        onClick={() => dispatch(setFilterModalOpen())}
        className={`ml-3 w-[80px] cursor-pointer border-gray border-2 rounded-3xl p-1 content-center flex justify-around items-center`}
      >
        Filter <LuSettings2 />
      </button>
    </div>
  );
};

export default FilterSection;
