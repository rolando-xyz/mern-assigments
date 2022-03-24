import {BrowserRouter, Switch, Route} from "react-router-dom"
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Form/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
