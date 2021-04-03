// react libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// header and footer
import Header from "./core/Header.js";
import Footer from "./core/Footer.js";

// components
import Home from "./pages/home/Home.js";
import Course from "./pages/course/Course.js";
import Team from "./pages/team/Team.js";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/team" component={Team} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
