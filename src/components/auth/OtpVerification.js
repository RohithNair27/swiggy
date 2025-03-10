import React from "react";
import { FOOD_ICON } from "../../utils/constants";

const OtpVerification = ({ phoneNumber }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white px-6">
      <div className="w-full max-w-md p-6">
        <div className="flex">
          <div>
            <h2 className="text-5xl font-semibold text-black">Enter OTP</h2>
            <p className="text-gray-600 mt-2">
              We've sent an OTP to your phone number.
            </p>
          </div>
          <div className="w-20 h-20 mx-auto mt-4">
            <img
              src={FOOD_ICON}
              alt="Food Logo"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>

        <hr className="border-t-2 border-black w-10 my-4 mx-auto" />

        <form>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={phoneNumber}
            disabled
            className="w-full px-4 py-5 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            name="otp"
            placeholder="One time password"
            className="w-full px-4 py-5 mt-4 font-semibold text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md mt-4 hover:bg-orange-600 transition">
            VERIFY OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
