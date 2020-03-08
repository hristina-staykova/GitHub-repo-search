import React from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import Comments from "./Comments";

const { Panel } = Collapse;

function Acordion({ issues, issueState, errors }) {
  if (errors && errors.length) {
    return <div>{errors[0].message}</div>;
  }

  if (!issues) {
    return <div>No results to display - enter search parameters</div>;
  }

  return (
    <>
      <Collapse accordion>
        {issues
          .filter(item => item.state === issueState)
          .map((issue, i) => (
            <Panel key={i} header={issue.title}>
              <p>
                Author: {issue.author.login} on {issue.createdAt.substr(0, 10)}
              </p>
              <Comments data={issue.comments.nodes} />
              <a href={issue.url}>View on GitHub</a>
            </Panel>
          ))}
      </Collapse>
    </>
  );
}

export default Acordion;
