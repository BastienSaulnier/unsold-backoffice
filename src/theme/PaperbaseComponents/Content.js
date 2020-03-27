// React imports
import React from "react";

// Router imports
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../../store";

// Pages imports
import Home from "../../pages/Home/index";
import Page1 from "../../pages/Page1/index";
import Page2 from "../../pages/Page2/index";
import Page3 from "../../pages/Page3/index";
import Page4 from "../../pages/Page4/index";
import Page5 from "../../pages/Page5/index";
import Page6 from "../../pages/Page6/index";
import Page7 from "../../pages/Page7/index";
import Page8 from "../../pages/Page8/index";
import Page9 from "../../pages/Page9/index";

//Materiel-UI imports
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

/* -------------------- COMPONENT START -------------------- */

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
    padding: 20
  }
});

class Content extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/authentication" component={Page1}></Route>
            <Route path="/database" component={Page2}></Route>
            <Route path="/storage" component={Page3}></Route>
            <Route path="/hosting" component={Page4}></Route>
            <Route path="/functions" component={Page5}></Route>
            <Route path="/ml_kit" component={Page6}></Route>
            <Route path="/analytics" component={Page7}></Route>
            <Route path="/performance" component={Page8}></Route>
            <Route path="/test_lab" component={Page9}></Route>
          </Switch>
        </Router>
      </Paper>
    );
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
