import React, { Component } from "react";
import { connect } from "react-redux";

export class SignInMethod extends Component {
  render() {
    return <div>SignInMethod Component</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SignInMethod);
