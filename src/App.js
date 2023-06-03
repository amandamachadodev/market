import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import './App.css';
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product-details/:id" component={ProductDetails} />
      </Switch>
  );
}

export default App;
