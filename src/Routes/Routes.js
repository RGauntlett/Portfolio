import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/HomePage/Home";
import ProjectPage from "../components/ProjectPage/ProjectPage";
import Navigation from "../components/UI/Navbar";
import Contact from "../components/ContactPage/Contact";
import Footer from "../components/UI/Footer";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
