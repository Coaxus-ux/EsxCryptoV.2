import { Fragment } from "react";

import Testimonials from "./Testimonials";
import Us from "./Us";
import Footer from "./Footer";
import Contact from "./Contact";
import Profit from "./Profit";
const HomePage = ({ crypto }) => {
  

  return (
    <Fragment>
      <div className="container mx-auto grid grid-cols-1 my-4 md:grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-white  font-bold text-7xl md:text-9xl">
            CHANGE YOUR LIFE WITH
          </h1>
          <span className="text-green-400 font-bold text-7xl md:text-9xl">
            ESX
          </span>
          <div className="frame w-52 h-12 items-center">
            <span className="text-blue-700 px-4 ">100% &nbsp;</span>
            Insurange
          </div>
          &nbsp;
          <div className="frame w-56 h-12 items-center">
            <span className="text-blue-700 px-4 ">0% &nbsp;</span>
            Transfer cost
          </div>
          &nbsp;
          <div className="frame w-72 h-12 items-center">
            <span className="text-blue-700 px-4 ">+1000 &nbsp;</span>
            Cryptocurrencies
          </div>
        </div>

        <div>
          <div className="flex justify-center py-9 flex-col ">
            <h1 className="text-white font-bold text-4xl uppercase mx-auto my-4 text-center">
              top Cryptocurrencies
            </h1>
            {crypto.map((coin) => (
              <div
                className="frame w-80 mx-auto my-2 h-14 items-center"
                key={coin.CoinInfo.Id}
              >
                <div className="text-green-500 font-bold mx-2 text-3xl">
                  {coin.CoinInfo.Name}
                </div>
                <div>
                  <div className="text-base text-white">
                    {coin.CoinInfo.FullName}
                  </div>
                  <div className="text-xs text-blue-500">
                    Price: {coin.DISPLAY.USD.PRICE}
                  </div>
                </div>
                &nbsp;
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <Profit/>
      <Us/>
      <Testimonials/>



      <Contact/>
      <Footer/>
    </Fragment>
  );
};

export default HomePage;
