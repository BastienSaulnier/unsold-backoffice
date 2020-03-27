import React, { Component } from "react";
import { connect } from "react-redux";

export class PostMethod extends Component {
  render() {
    return <div>PostMethod Component</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostMethod);
