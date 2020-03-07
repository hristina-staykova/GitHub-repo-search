import React from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import Comments from "./Comments";

const { Panel } = Collapse;

function Acordion({ issues, issueState }) {
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
              <a href={issue.url}>{issue.url}</a>
              <p>Created at: {issue.createdAt}</p>
              <Comments data={issue.comments.nodes} />
            </Panel>
          ))}
      </Collapse>
    </>
  );
}

export default Acordion;
