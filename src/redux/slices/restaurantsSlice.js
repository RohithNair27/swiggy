import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurantItems: [],
    backupItems: [],
    carouselItems: [],
    setFilterItems: [],
    isModalVisible: false,
    isUnserviceable: false,
  },
  reducers: {
    fillAllRestaurants: (state, action) => {
      state.restaurantItems = action.payload;
    },
    fillBackupRestaurants: (state, action) => {
      state.backupItems = action.payload;
    },
    backupRestaurants: (state) => {
      state.restaurantItems = state.backupItems;
    },
    putCarouselItems: (state, action) => {
      state.carouselItems = action.payload;
    },
    setFilterItems: (state, action) => {
      state.setFilterItems = action.payload;
    },
    setFilterModalOpen: (state, action) => {
      state.isModalVisible = !state.isModalVisible;
    },
    setUnserviceable: (state) => {
      state.isUnserviceable = true;
    },
  },
});

export const {
  fillAllRestaurants,
  fillBackupRestaurants,
  backupRestaurants,
  putCarouselItems,
  setUnserviceable,
  setFilterItems,
  setFilterModalOpen,
} = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
