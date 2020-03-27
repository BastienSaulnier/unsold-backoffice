import React, { Component } from "react";
import { connect } from "react-redux";
import Users from "../Users/index";
import SignInMethod from "../SignInMethod/index";
import Templates from "../Templates/index";
import Usage from "../Usage/index";

// Material-UI imports
import Typography from "@material-ui/core/Typography";

export class Page1 extends Component {
  render() {
    const { tabIndex } = this.props;

    let component = null;
    switch (tabIndex) {
      case 0:
        component = <Users />;
        break;
      case 1:
        component = <SignInMethod />;
        break;
      case 2:
        component = <Templates />;
        break;
      case 3:
        component = <Usage />;
        break;
      default:
        component = null;
    }

    return (
      <div className="Page-1-Content">
        <Typography variant="h4" gutterBottom>
          Page-1-Content
        </Typography>
        {component}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tabIndex: state.navigation.tabIndex
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
