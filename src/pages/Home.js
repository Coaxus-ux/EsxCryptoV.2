import { Fragment} from "react";
import HomePage from "../components/HomePage";
import Header from "../components/Header";

const Home = ({crypto,session}) => {
  
  return (
    <Fragment>
      <Header session={session}/>
      <HomePage crypto={crypto}/>
    </Fragment>
  );
};

export default Home;
