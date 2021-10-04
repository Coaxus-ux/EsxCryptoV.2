import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Footer from "./Footer";
import img1 from "../img/image-23.jpeg";
import img2 from "../img/image-28.jpeg";
import img3 from "../img/image-31.jpeg";

const Exchange = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-indigo-50 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl leading-6 font-bold text-blue-400"
                >
                  You made a transfer
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-lg text-gray-500">
                    you sold x amount of bitcoin for x NFT
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium  bg-green-500 border border-transparent rounded-md hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    I agree
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <div className="flex flex-col md:flex-row w-2/3 h-screen mx-auto">
        <div className="grid md:flex-grow card  place-items-center">
          <p className="text-3xl font-bold text-white">CRYPTO</p>
          <div className="card shadow-2xl lg:card-side bg-glass mt-3 text-primary-content">
            <div className="card-body">
              <p className="text-2xl font-bold">BITCOIN</p>
              <div className="flex flex-row">
                <div className="flex flex-col mr-3">
                  <p className="text-lg ml-2 font-bold">Price</p>
                  <p className="text-lg ml-2 font-bold">$45'000.00</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg ml-2 font-bold">Vol</p>
                  <p className="text-lg ml-2 font-bold">$23'000.000</p>
                </div>
              </div>

              <div className="justify-end card-actions">
                <div class="p-6 card bordered ">
                  <div class="form-control">
                    <label class="cursor-pointer label">
                      <span class="text-white mr-4">Sell this</span>
                      <input type="checkbox" class="checkbox"></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-2xl lg:card-side bg-glass mt-3 text-primary-content">
            <div className="card-body">
              <p className="text-2xl font-bold">DOGE</p>
              <div className="flex flex-row">
                <div className="flex flex-col mr-3">
                  <p className="text-lg ml-2 font-bold">Price</p>
                  <p className="text-lg ml-2 font-bold">$0.232323</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg ml-2 font-bold">Vol</p>
                  <p className="text-lg ml-2 font-bold">$13'000.000</p>
                </div>
              </div>

              <div className="justify-end card-actions">
                <div class="p-6 card bordered ">
                  <div class="form-control">
                    <label class="cursor-pointer label">
                      <span class="text-white mr-4">Sell this</span>
                      <input type="checkbox" class="checkbox"></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow-2xl lg:card-side bg-glass mt-3 text-primary-content">
            <div className="card-body">
              <p className="text-2xl font-bold">ETERIUM</p>
              <div className="flex flex-row">
                <div className="flex flex-col mr-3">
                  <p className="text-lg ml-2 font-bold">Price</p>
                  <p className="text-lg ml-2 font-bold">$5'000.00</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg ml-2 font-bold">Vol</p>
                  <p className="text-lg ml-2 font-bold">$16'000.000</p>
                </div>
              </div>

              <div className="justify-end card-actions">
                <div class="p-6 card bordered ">
                  <div class="form-control">
                    <label class="cursor-pointer label">
                      <span class="text-white mr-4">Sell this</span>
                      <input type="checkbox" class="checkbox"></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider md:divider-vertical text-white">
          {" "}
          <button
            className="h-6 w-34 fill-current hover:text-blue-500 font-bold"
            onClick={openModal}
          >
            Make Exchange
          </button>
        </div>
        <div className="grid md:flex-grow  card rounded-box place-items-center">
          <p className="text-3xl text-white font-bold">NFT</p>
          <div className="card mt-3 shadow-2xl lg:card-side bg-glass text-primary-content">
            <div className="card-body">
              <div className="flex">
                <div className="mr-4">
                  <img className="w-40" src={img1} alt="img1" />
                </div>
                <div className="text-center text-xl mt-5">
                  Lorem Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Odit <br /> similique voluptates nesciunt deserunt
                  adipisci? Ullam necessitatibus cumque, <br />
                  minima corrupti facere accusamus odio? Perspiciatis ad
                  nostrum,
                </div>
              </div>
              <div className="justify-end card-actions">
                <div class="form-control">
                  <label class="cursor-pointer label">
                    <span class="text-white mr-4">Sell this</span>
                    <input type="checkbox" class="checkbox"></input>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3 shadow-2xl lg:card-side bg-glass text-primary-content">
            <div className="card-body">
              <div className="flex">
                <div className="mr-4">
                  <img className="w-40" src={img2} alt="img1" />
                </div>
                <div className="text-center text-xl mt-5">
                  Lorem Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Odit <br /> similique voluptates nesciunt deserunt
                  adipisci? Ullam necessitatibus cumque, <br />
                  minima corrupti facere accusamus odio? Perspiciatis ad
                  nostrum,
                </div>
              </div>
              <div className="justify-end card-actions">
                <div class="form-control">
                  <label class="cursor-pointer label">
                    <span class="text-white mr-4">Sell this</span>
                    <input type="checkbox" class="checkbox"></input>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3 shadow-2xl lg:card-side bg-glass text-primary-content">
            <div className="card-body">
              <div className="flex">
                <div className="mr-4">
                  <img className="w-40" src={img3} alt="img1" />
                </div>
                <div className="text-center text-xl mt-5">
                  Lorem Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Odit <br /> similique voluptates nesciunt deserunt
                  adipisci? Ullam necessitatibus cumque, <br />
                  minima corrupti facere accusamus odio? Perspiciatis ad
                  nostrum,
                </div>
              </div>
              <div className="justify-end card-actions">
                <div class="form-control">
                  <label class="cursor-pointer label">
                    <span class="text-white mr-4">Sell this</span>
                    <input type="checkbox" class="checkbox"></input>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Exchange;
