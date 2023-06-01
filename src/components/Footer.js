import React from "react";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="container">
        <div className=" border-t border-gray-600 py-3 mt-4">
          <div className="text-xl  grid grid-flow-col justify-start items-center gap-4">
            <FaDiscord />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
