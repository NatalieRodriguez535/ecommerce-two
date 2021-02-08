import "./App.css";
//switch parent container to allow access to routing
//route is the actual route that allows the webpage to be accessed via http link
import { Switch, Route } from "react-router-dom";
import Nav from "../src/component/Nav";
import Home from "../src/component/Home";
import Footer from "../src/component/Footer";
import Product from "../src/component/Product";
import Contact from "../src/component/Contact";

function App() {
  return (
    //react fragment
    <>
    {/* Nav component */}
    <Nav/>
    <Footer/>
    <Switch>
      {/* exact path= "/" means home page */}
      <Route exact path="/">
        {/* home component */}
        <Home/>
      </Route>
      {/* Path can be used for any page */}
      <Route path="/products">
        <Product/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
