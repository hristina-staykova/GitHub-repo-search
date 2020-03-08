import React from "react";

function ClosedIssues({ closedIssues }) {
  if (!closedIssues) {
    return <div>Open issues results</div>;
  }

  return <h1>Closed Issues</h1>;
}

export default ClosedIssues;
