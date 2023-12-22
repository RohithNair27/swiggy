import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "../shimmerUI/RestaurantMenuShimmer";
import { MENU_ITEM_IMAGE_URL } from "../../utils/constants";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import AddToCartButton from "./AddToCartButton";
import { useSelector } from "react-redux";

const ItemCard = ({ menuItem, name }) => {
  menuItem.restaurant = name;
  return (
    <div className="bg-slate-100 rounded-lg p-4 flex shadow" data-testid="menu">
      <img
        className="h-52 w-60 object-cover rounded-lg cursor-pointer"
        src={MENU_ITEM_IMAGE_URL + menuItem.card.info.imageId}
        alt={menuItem.card.info.name}
      />
      <div className="mt-4 ml-6">
        <h3 className="text-base font-bold mb-2">{menuItem.card.info.name}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {menuItem.card.info.description}
        </p>
        <p className="text-base font-bold mb-2">
          ₹{menuItem.card.info.price / 100}
        </p>
        <AddToCartButton menuItem={menuItem} />
      </div>
    </div>
  );
};

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  // customized or user created hook
  // used to get restaurant menu data from the api
  useRestaurantMenu(restaurantId);

  const restaurantInfo = useSelector((store) => store.restaurantMenu?.menu);

  if (!restaurantInfo) return <RestaurantMenuShimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    totalRatingsString,
  } = restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="p-6 bg-slate-200">
      <div className="restaurant-menu-page-header">
        <h2 className="text-4xl font-bold mb-4">{name}</h2>
        <div className="flex justify-between">
          <div>
            <div className="restaurant-cuisines">{cuisines.join(", ")}</div>
            <div className="restaurant-area-name">{areaName}</div>
          </div>
          <div className="items-center border-gray-300 border-solid border-2 shadow">
            <div className="restaurant-rating">{avgRating}⭐</div>
            <hr />
            <div className="restaurant-total-rating">{totalRatingsString}</div>
          </div>
        </div>
        <div className="flex mt-5 mb-5">
          <div className="font-semibold text-lg ml-3">22 mins</div>
          <div className="font-semibold text-lg ml-3">{costForTwoMessage}</div>
        </div>
        <hr />
      </div>
      <div className="menu-items-container">
        {itemCards.map((menuItem) => (
          <ItemCard
            key={menuItem.card.info.id}
            menuItem={menuItem}
            name={name}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
