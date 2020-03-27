import React, { Component } from "react";
import { connect } from "react-redux";

// Material-UI imports
import Typography from "@material-ui/core/Typography";

export class Page3 extends Component {
  render() {
    return (
      <div className="Page-3-Content">
        <Typography variant="h4" gutterBottom>
          Page-3-Content
        </Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
