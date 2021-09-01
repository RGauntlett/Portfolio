import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/HomePage/Home";
import ProjectPage from "../components/ProjectPage/ProjectPage";
import Navigation from "../components/UI/Navbar";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={ProjectPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
