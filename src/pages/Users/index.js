import React, { Component } from "react";
import { connect } from "react-redux";

export class Users extends Component {
  render() {
    return <div>Users Component</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
