import { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import CryptoPage from "./pages/Cryptopage";
import SalePage from "./pages/SalePage";
import NftPage from "./pages/NftPage";
function App() {
  const [coins, setCoins] = useState([]);
  const [nftList, setNftList] = useState([]);
  return (
    <Fragment>
          <Router>
            <Switch>
                <Route path="/" exact><Home setCoins={setCoins} setNftList={setNftList}/></Route>
                <Route path="/cryptocurrency"> <CryptoPage coins={coins}/> </Route>
                <Route path="/Sale" component={SalePage}/>
                <Route path="/Nft"> <NftPage nftList={nftList}/> </Route>
            </Switch>
          </Router>
    </Fragment>
  );
}

export default App;
