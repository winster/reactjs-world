import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
  <button onClick={history.goBack}>&larr; Back</button>
);

export default withRouter(Back);