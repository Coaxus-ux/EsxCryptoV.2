import React from 'react'

const Profit = () => {
    return ( 
        <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-5xl uppercase mx-auto text-center">
          your profitability
        </h1>
        <h4 className="text-white font-bold mt-8 text-base mx-auto text-center">
          If you use esxcrypto your profitability will be..
        </h4>
        <h2 className="text-blue-500 text-4xl font-bold mt-8 mx-auto text-center">
          203.32%
        </h2>
        <div className="flex flex-row mt-5 justify-center ">
          <a
            className=" px-4 py-3 w-56  text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl"
            href="/#"
          >
            Sign Up Now
          </a>
          <p className="text-white m-3 md:m-2 md:ml-4 text-sm md:text-xl">
            <i className="uil uil-gift"></i> Get 100% Bonus
          </p>
        </div>

        <div className="flex flex-col md:flex-row mt-5 text-white">
          <div className="flex flex-col m-4 ">
            <div className="flex m-4 ">
              <div className="h-16 w-12 bg-solid rounded-xl font-bold text-center flex items-center justify-center mr-3 text-4xl">
                9
              </div>
              <div className="h-16 w-12 bg-solid rounded-xl font-bold text-center flex items-center justify-center text-4xl mr-3">
                3
              </div>
              <div className="h-16 w-12 bg-solid rounded-xl font-bold text-center flex items-center justify-center text-4xl mr-3">
                5
              </div>
              <div className="h-16 w-12 bg-solid rounded-xl font-bold text-center  flex items-center justify-center text-4xl">
                2
              </div>
            </div>
            <div className="font-bold text-sm ml-5">
              People have already been registered <br></br> on ESXCRYPTO
            </div>
          </div>
          <div className="m-8 flex flex-col md:flex-row justify-center items-center md:items-start">
            <div className="bg-solid mr-6 mb-6 rounded-xl w-52 h-24 flex items-center justify-center flex-col">
              <p className="text-blue-500 font-bold text-lg">0%</p>
              <p>Sign up </p>
            </div>
            <div className="bg-solid mr-6 rounded-xl w-64 h-24 flex items-center justify-center flex-col">
              <p className="text-blue-500 font-bold text-lg">200%</p>
              <p>Earnings with our platform</p>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Profit;