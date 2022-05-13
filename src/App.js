import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail/Detail";
import Home from "./routes/Home/Home";
import "./css/reset.css";
import "./css/styles.scss";
import styles from "./css/App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>Nomad Movies</h1>
      </div>
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
    </div>
  );
}

export default App;
