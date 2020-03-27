import React, { Component } from "react";
import { connect } from "react-redux";

// Material-UI imports
import Typography from "@material-ui/core/Typography";

export class Home extends Component {
  render() {
    return (
      <div className="HomeContent">
        <Typography variant="h4" gutterBottom>
          Home-Content
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
