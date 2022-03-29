import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from "./views/Dashboard";
import AddPet from "./views/AddPet";
import ShowPet from "./views/ShowPet";
import EditPet from "./views/EditPet";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <h1></h1>
        <Switch>
          <Route exact path="/pets/new">
            <AddPet/>
          </Route>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          <Route exact path="/pets/show/:id">
            <ShowPet/>
          </Route>
          <Route exact path="/pets/edit/:id">
            <EditPet/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;