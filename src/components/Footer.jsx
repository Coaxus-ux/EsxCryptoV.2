import React from "react";
const Footer = () => {
  return (
    <div className="pt-2">
      <div
        className="flex pb-5 px-3 m-auto pt-5 
            border-t border-green-500 text-white text-sm 
            flex-col md:flex-row max-w-full"
      >
        <div className="mt-2">© Copyright 2021. All Rights Reserved.</div>

        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="/#" className="w-6 mx-1">
            <i className="uil uil-facebook-f"></i>
          </a>
          <a href="/#" className="w-6 mx-1">
            <i className="uil uil-twitter-alt"></i>
          </a>
          <a href="/#" className="w-6 mx-1">
            <i className="uil uil-youtube"></i>
          </a>
          <a href="/#" className="w-6 mx-1">
            <i className="uil uil-linkedin"></i>
          </a>
          <a href="/#" className="w-6 mx-1">
            <i className="uil uil-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
