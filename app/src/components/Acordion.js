import React, { useState } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Collapse } from "antd";
import { Card } from "antd";

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
              <p>{issue.state}</p>
              <form>
                <input type="text" placeholder="Search in comments..." />
              </form>
              {issue &&
                issue.comments &&
                issue.comments.nodes &&
                issue.comments.nodes.map((comment, i) => {
                  return (
                    <Card
                      size="small"
                      title={comment.title}
                      style={{ margin: "5px 0px" }}
                      key={i}
                    >
                      <div>
                        <p>{comment.bodyText}</p>
                        <p>{comment.author ? comment.author.login : null}</p>
                      </div>
                    </Card>
                  );
                })}
            </Panel>
          ))}
      </Collapse>
    </>
  );
}

export default Acordion;
