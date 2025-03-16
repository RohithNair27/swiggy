import React from "react";
import Header from "./header/Header";
import LocationSidebar from "./sidebar/LocationSidebar";
import AuthSidebar from "./sidebar/AuthSidebar";
import Footer from "./footer/Footer";
import Modal from "./modal/Modal";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Main() {
  const isModalVisible = useSelector(
    (store) => store.restaurants.isModalVisible
  );
  console.log(isModalVisible);
  return (
    <>
      {isModalVisible && <Modal />}
      <Header />
      <LocationSidebar />
      <AuthSidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;
