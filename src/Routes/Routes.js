import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../components/HomePage/Home";
import ProjectPage from "../components/ProjectPage/ProjectPage";
import Navigation from "../components/UI/Navbar";
import Contact from "../components/ContactPage/Contact";
import AboutPage from "../components/AboutPage/AboutPage";
import Footer from "../components/UI/Footer";
import styles from "./Routes.module.css";

const Routes = () => {
  return (
    <Router>
      <div className="d-flex h-100 flex-column justify-content-between">
        <Navigation />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
