import { Route } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "../components/navigation/top/Navbar";
import Home from "../pages/home/Home";

const Layout = () => (
  <Fragment>
    <Navbar />
    <Route path="/" exact component={Home} />
  </Fragment>
);

export default Layout;
