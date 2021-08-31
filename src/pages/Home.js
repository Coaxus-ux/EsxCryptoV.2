import { Fragment, useState } from "react";
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import Cryptocurrency from "../components/Cryptocurrency";
import Load from "../components/Load";
import Nft from "../components/Nft";
import Sale from "../components/Sale";



const Home = ({setCoins, setNftList}) => {
  
  return (
    <Fragment>
      <Header />
      <HomePage setCoins={setCoins} setNftList={setNftList}/>
    </Fragment>
  );
};

export default Home;
