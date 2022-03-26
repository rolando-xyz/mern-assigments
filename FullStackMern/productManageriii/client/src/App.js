import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import CreateProduct from "./components/CreateProduct";
import OneProduct from "./components/OneProduct";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CreateProduct/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path="/product/:id">
          <OneProduct/>
        </Route>
        <Route exact path="/product/update/:id">
          <EditProduct/>
        </Route>
        <Route exact path="/product/delete/:id">
          <DeleteProduct/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
