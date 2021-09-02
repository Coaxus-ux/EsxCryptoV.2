import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Nft = ({ nftList }) => {
  let [isOpen, setIsOpen] = useState(false);

  const [nftListClean, setNftListClean] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    setNftListClean(
      nftList.filter(function (el) {
        return (
          el.name !== null &&
          el.description !== null &&
          el.image_preview_url !== null
        );
      })
    );
  }, [setNftListClean, nftList]);

  return (
    <div className="grid grid-cols-1 ms:grid-cols-3 md:grid-cols-3 2xl:grid-cols-5 gap-y-4 gap-x-4 ">
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
                  className="text-lg leading-6 font-bold text-red-400"
                >
                  No more information
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                  We are sorry that we cannot give you more information about this NFT, as it is all shown on the card.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {nftListClean.map((nft) => (
        <div
          key={nft.id}
          className="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 m-auto p-4  bg-indigo-50 "
        >
          <div class="w-full block h-full ">
            <img
              alt="NFTPhoto"
              src={nft.image_preview_url}
              className="max-h-60 w-full object-cover rounded"
            />
            <div className="w-full ">
              <p className="text-indigo-500 text-md font-medium">
                {nft.creator.user.username}
              </p>

              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2 ">
                {nft.collection.name}
              </p>
              <div className="overflow-auto h-28">
                <p className="text-gray-600 dark:text-gray-300 font-light text-md">
                  {nft.description}
                </p>
              </div>

              <div className="flex flex-wrap  justify-starts items-center mt-4 border-t-2 pt-5">
                <div className="text-xs w-34 mx-3 py-1.5 px-4 bg-red-300 rounded-lg shadow-xs cursor-pointer hover:bg-red-500 hover:text-gray-100">
                  <button
                    class="h-6 w-34 fill-current hover:text-gray-100 font-bold"
                    onClick={openModal}
                  >
                    MORE
                  </button>
                </div>
                <div className="text-xs  font-bold w-48 py-1.5 shadow-xs bg-green-300 hover:bg-green-500 hover:text-gray-100 rounded-lg">
                  <button class="h-6 w-48   hover:text-gray-100 font-bold ">
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nft;
<h1>NFT</h1>;
