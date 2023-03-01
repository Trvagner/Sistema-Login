import { Fragment } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from '../paginas/Home';
import Signin from '../paginas/Signin';
import Signup from '../paginas/Signup';
import useAuth from '../hooks/useAuth'

const Private = ({ Item }) => {
    const { signed } = useAuth();
  
    return signed > 0 ? <Item /> : <Signin />;
  };

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;