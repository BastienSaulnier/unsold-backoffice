import React, { Component } from "react";
import { connect } from "react-redux";

// Material-UI imports
import Typography from "@material-ui/core/Typography";

export class Page6 extends Component {
  render() {
    return (
      <div className="Page-6-Content">
        <Typography variant="h4" gutterBottom>
          Page-6-Content
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Page6);
