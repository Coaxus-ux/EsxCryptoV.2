import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import CryptoPage from "./pages/Cryptopage";
import SalePage from "./pages/SalePage";
import NftPage from "./pages/NftPage";
import Load from "./components/Load"
function App() {
  const [coins, setCoins] = useState([]);
  const [nftList, setNftList] = useState([]);
  const [load, setLoad] = useState(true);
  const [crypto, setCrypto] = useState([]);
  
  useEffect(() => {
    const query = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const url2 =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=30&tsym=USD";
      const url3 = 
        "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50";
      const [coins10, coins30, nft] = await Promise.all([
        axios(url),
        axios(url2),
        axios(url3)
      ]);
      setCrypto(coins10.data.Data);
      setCoins(coins30.data.Data);
      setNftList(nft.data.assets);
      setLoad(false);
    };
    query();
    
  }, [setCoins, setNftList]);
  return (
    <Fragment>
          <Router>
            {
              load ? <Load/>:
              <Switch>
                <Route path="/" exact><Home crypto={crypto} /></Route>
                <Route path="/cryptocurrency"> <CryptoPage coins={coins}/> </Route>
                <Route path="/Sale" component={SalePage}/>
                <Route path="/Nft"> <NftPage nftList={nftList}/> </Route>
            </Switch>
            }
          

             
            
            
          </Router>
    </Fragment>
  );
}

export default App;
