import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import './App.css';

function App() {
  return (
      <Switch>
       <Route path="/" component={Home} exact />
      </Switch>
  );
}

export default App;
