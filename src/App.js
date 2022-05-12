import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail/Detail";
import Home from "./routes/Home/Home";
import "./css/reset.css";
import "./css/styles.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
