import { Fragment} from "react";
import HomePage from "../components/HomePage";
import Header from "../components/Header";




const Home = ({crypto}) => {
  
  return (
    <Fragment>
      <Header />
      <HomePage crypto={crypto}/>
    </Fragment>
  );
};

export default Home;
