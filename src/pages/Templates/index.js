import React, { Component } from "react";
import { connect } from "react-redux";

export class Templates extends Component {
  render() {
    return <div>Templates Component</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
