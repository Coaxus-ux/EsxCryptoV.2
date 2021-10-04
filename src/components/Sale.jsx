import React, { Fragment } from "react";

import Footer from "./Footer";
import SaleCoin from "./SaleCoin";

const Sale = ({
  coins,
  setCryptocurrency,
  rawData,
  setCurrency,
  dataCryptos,
  session
}) => {
  const localCurrencies = [
    { code: "USD", name: "Dollar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "EUR", name: "Euro" },
    { code: "COP", name: "Colombian Peso" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "PEN", name: "Peruvian Sun" },
    { code: "CLP", name: "Chilean Peso" },
  ];

  return (
    <Fragment>
      <div>
        <div className="md:mx-24  mt-10 rounded-box mb-5">
          <div className="flex flex-col md:flex-row  mb-10">
            <div>
              <label className="text-green-400">
                Select the local currency you want
              </label>
              <select
                className="select select-bordered  w-full max-w-xs select-primary "
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option disabled="disabled" value="">
                  {" "}
                  Select{" "}
                </option>
                {localCurrencies.map((opcion) => (
                  <option key={opcion.code} value={opcion.code}>
                    {opcion.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-green-400">
                Select the crypto currency you want
              </label>
              <select
                className="select select-bordered w-full max-w-xs select-primary"
                onChange={(e) => setCryptocurrency(e.target.value)}
              >
                <option disabled="disabled" value="all">
                  Select
                </option>
                {coins.map((coin) => (
                  <option key={coin.CoinInfo.Id} value={coin.CoinInfo.Internal}>
                    {coin.CoinInfo.FullName}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <SaleCoin session={session} rawData={rawData} dataCryptos={dataCryptos} />
        </div>

        <Footer />
      </div>
      
    </Fragment>
  );
};

export default Sale;
