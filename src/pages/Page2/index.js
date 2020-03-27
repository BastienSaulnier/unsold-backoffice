import React, { Component } from "react";
import { connect } from "react-redux";
import Database from "../Database/index";
import PostMethod from "../PostMethod/index";
import DBUsage from "../DBUsage/index";

// Material-UI imports
import Typography from "@material-ui/core/Typography";

export class Page2 extends Component {
  render() {
    const { tabIndex } = this.props;

    let component = null;
    switch (tabIndex) {
      case 0:
        component = <Database />;
        break;
      case 1:
        component = <PostMethod />;
        break;
      case 2:
        component = <DBUsage />;
        break;
      default:
        component = null;
    }

    return (
      <div className="Page-2-Content">
        <Typography variant="h4" gutterBottom>
          Page-2-Content
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

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
