import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import CryptoPage from "./pages/Cryptopage";
import SalePage from "./pages/SalePage";
import NftPage from "./pages/NftPage";
import Load from "./components/Load";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ExchangePage from "./pages/ExchangePage";

function App() {
  const [coins, setCoins] = useState([]);
  const [nftList, setNftList] = useState([]);
  const [load, setLoad] = useState(true);
  const [crypto, setCrypto] = useState([]);
  const [rawData, setRawData] = useState([]);
  const [currency, setCurrency] = useState("USD");
  const [cryptocurrency, setCryptocurrency] = useState("BTC");
  const [dataCryptos, setDataCryptos] = useState([]);
  const [session, setSession] = useState(false);

  useEffect(() => {
    const query = async () => {
      const url2 =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD";
      const url3 =
        "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50";
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const url4 = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

      const [coins10, coins30, nft, sale] = await Promise.all([
        axios(url),
        axios(url2),
        axios(url3),
        axios(url4)
      ]);
      setDataCryptos(sale.data.DISPLAY[cryptocurrency][currency]);
      setRawData(sale.data.RAW[cryptocurrency][currency]);

      setCrypto(coins10.data.Data);
      setCoins(
        coins30.data.Data.filter(function(el){
          return (
            el.hasOwnProperty('DISPLAY') !== false
          )
        })
      );
      setNftList(
        nft.data.assets.filter(function (el) {
          return (
            el.name !== null &&
            el.description !== null &&
            el.image_preview_url !== null
          );
        })
      );
      setLoad(false);
    };
    query();
  }, [setCoins, setNftList, setDataCryptos, currency, cryptocurrency]);
  return (
    <Fragment>
      <Router>
        {load ? (
          <Load />
        ) : (
          <Switch>
          
            <Route path="/" exact>
              <Home session={session} crypto={crypto} />
            </Route>
            <Route path="/cryptocurrency">
              <CryptoPage session={session} coins={coins} />
            </Route>

            <Route path="/Login" >
              <LoginPage  setSession={setSession}/>
            </Route>

            <Route path="/Register" >
              <RegisterPage  setSession={setSession}/>
            </Route>
            <Route path="/exchange" >
              <ExchangePage session={session} nftList={nftList} coins={coins} />
            </Route>

            <Route path="/Sale">
              <SalePage session={session}  rawData={rawData} dataCryptos={dataCryptos} setCurrency={setCurrency} coins={coins} setCryptocurrency={setCryptocurrency} />
            </Route>
            <Route path="/Nft">
              <NftPage session={session} nftList={nftList} />
            </Route>
          </Switch>
        )}
      </Router>
    </Fragment>
  );
}

export default App;
