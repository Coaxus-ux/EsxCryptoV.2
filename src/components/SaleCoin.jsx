import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";
const SaleCoin = ({ dataCryptos, rawData, session }) => {
  const [amountUser, setAmountUser] = useState(0);

  const amount = (e) => {
    const amounFinal = rawData.PRICE * e.target.value;
    console.log(rawData.PRICE * 2);
    setAmountUser(new Intl.NumberFormat("de-DE").format(amounFinal));
  };
  return (
    <Fragment>
      <div className="flex flex-col ">
        <div className="grid  card  rounded-box">
          <div className="mx-5 mt-2 text-white font-bold text-4xl flex flex-col md:flex-row">
            <div className="shadow stats md:mr-10 mb-2">
              <div className="stat">
                <div className="stat-title">Change Today</div>
                <div className="stat-value">{dataCryptos.CHANGEDAY}</div>
              </div>
            </div>
            <div className="shadow stats mb-2">
              <div className="stat">
                <div className="stat-title">Price</div>
                <div className="stat-value">{dataCryptos.PRICE}</div>
              </div>
            </div>
            <div className="shadow stats mb-2 md:mx-10">
              <div className="stat">
                <div className="stat-title">High</div>
                <div className="stat-value">{dataCryptos.CHANGE24HOUR}</div>
              </div>
            </div>
          </div>
          <div className="mx-5 mt-2 text-white font-bold text-4xl flex md:mb-12 flex-col md:flex-row">
            <div className="shadow stats mb-2">
              <div className="stat">
                <div className="stat-title">Low</div>
                <div className="stat-value">{dataCryptos.LOWDAY}</div>
              </div>
            </div>
            <div className="shadow stats mb-2 md:mx-10">
              <div className="stat">
                <div className="stat-title">Supply</div>
                <div className="stat-value">{dataCryptos.SUPPLY}</div>
              </div>
            </div>
            <div className="shadow stats mb-2">
              <div className="stat">
                <div className="stat-title">Volume</div>
                <div className="stat-value">{dataCryptos.VOLUMEDAY}</div>
              </div>
            </div>
          </div>

          <Chart />
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="card text-white rounded-box place-items-center ">
          <p className="text-6xl font-bold mt-3">BUY</p>
          <div className="form-control mb-12">
            <label className="label ">
              <span className=" text-sm ">
                How many {dataCryptos.FROMSYMBOL} are you going to buy
              </span>
            </label>
            <input
              type="number"
              onChange={amount}
              placeholder="Amount"
              className="input input-bordered text-black"
            />
          </div>

          <div className=" shadow flex flex-col md:flex-row ">
            <div className="stat rounded-lg mr-1 mb-1 md:mb-0">
              <div className="stat-title">Total</div>
              <div className="stat-value text-lg">${amountUser}</div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success" >
                  Buy
                </button>
              </div>
            </div>

            <div className="stat rounded-lg">
              <div className="stat-title">Current balance</div>
              <div className="stat-value"> {session ? "$100'000.0000": "Login or register firts"}</div>
              <div className="stat-actions">
                <Link to="/Login" className="btn btn-sm btn-primary mr-2">Login</Link>
                <Link to="/Register" className="btn btn-sm btn-primary">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SaleCoin;
