import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
  <button className="back_button" onClick={history.goBack}>&larr; &nbsp; Back</button>
);

export default withRouter(Back);