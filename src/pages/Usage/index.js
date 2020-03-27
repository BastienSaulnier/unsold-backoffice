import React, { Component } from "react";
import { connect } from "react-redux";

export class Usage extends Component {
  render() {
    return <div>Usage Component</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Usage);
