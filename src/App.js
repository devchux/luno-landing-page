import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Layout />
      </Switch>
    </Router>
  );
}

export default App;
