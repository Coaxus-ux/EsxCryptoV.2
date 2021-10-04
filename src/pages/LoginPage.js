import { Fragment} from "react";
import Login from "../components/Login";
import Header from "../components/Header";

const LoginPage = ({setSession}) => {
    return ( 
        <Fragment>
        <Header/>
        <Login setSession={setSession}/>
      </Fragment>
     );
}
 
export default LoginPage;
