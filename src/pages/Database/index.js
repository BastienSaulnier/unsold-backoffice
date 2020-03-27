import React, { Component } from "react";
import { connect } from "react-redux";

export class Database extends Component {
  render() {
    return <div>Database Component</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Database);
