import { Fragment } from "react";
import Swal from 'sweetalert2'

const HomePage = ({ crypto }) => {
  
  const alert = e => {
    e.preventDefault()
    Swal.fire({
      title: 'Good job!',
      text: 'Email was sent correctly',
      icon: 'success',
      confirmButtonText: 'Let\'s go'
    })
  }
  
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
            <i class="uil uil-gift"></i> Get 100% Bonus
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
      <div className="flex flex-col md:flex-row justify-center items-center text-white mx-10 md:mx-96">
        <div className="mr-5 min-w-min">
          <p className="uppercase text-4xl font-bold text-green-500 text-center mb-10">
            About US
          </p>
          <p className="text-center text-lg">
            <span className="text-4xl md:text-9xl text-green-500">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consequat id justo at blandit. Ut tempor tempor porta. Nam vitae
            pretium purus. Donec ornare fermentum mauris ac rhoncus. Morbi
            rutrum porta mi, iaculis blandit ligula faucibus non. Nam malesuada
            scelerisque metus nec luctus. Phasellus viverra sem mauris, tempus
            accumsan tellus pellentesque feugiat.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:mx-56 text-white text-center mt-10 justify-center items-center">
      <div className="text-xl font-bold ">
      If you have any questions, you can send your email and our support will contact you immediately. 
      </div>
        <div>
          <form class="m-2 flex">
            <input
              class="rounded-l-lg w-56 md:w-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              placeholder="your.gmail@gmail.com"
            />
            <button onClick={alert} class="px-8 rounded-r-lg bg-green-400  text-gray-800 font-bold p-4 uppercase border-green-500 border-t border-b border-r">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* //FOOTER */}
      <div class="pt-2">
        <div
          class="flex pb-5 px-3 m-auto pt-5 
            border-t border-green-500 text-white text-sm 
            flex-col md:flex-row max-w-full"
        >
          <div class="mt-2">© Copyright 2021. All Rights Reserved.</div>

          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" class="w-6 mx-1">
              <i class="uil uil-facebook-f"></i>
            </a>
            <a href="/#" class="w-6 mx-1">
              <i class="uil uil-twitter-alt"></i>
            </a>
            <a href="/#" class="w-6 mx-1">
              <i class="uil uil-youtube"></i>
            </a>
            <a href="/#" class="w-6 mx-1">
              <i class="uil uil-linkedin"></i>
            </a>
            <a href="/#" class="w-6 mx-1">
              <i class="uil uil-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
