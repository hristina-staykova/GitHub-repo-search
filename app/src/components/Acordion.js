import React, { useState } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Collapse } from "antd";
import { Card } from "antd";

const { Panel } = Collapse;

function Acordion({ openIssues }) {
  if (!openIssues) {
    return <div>No results to display - enter search parameters</div>;
  }

  return (
    <>
      <Collapse accordion>
        {openIssues
          .filter(item => item.state === "OPEN")
          .map((open, i) => (
            <Panel key={i} header={open.title}>
              <a href={open.url}>{open.url}</a>
              <p>Created at: {open.createdAt}</p>
              <form>
                <input type="text" placeholder="Search in comments..." />
              </form>
              {open &&
                open.comments &&
                open.comments.nodes &&
                open.comments.nodes.map((comment, i) => {
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
