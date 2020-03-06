import React, { useState } from "react";
import { Button } from "antd";
import { Card } from "antd";

function OpenIssues({ openIssues }) {
  var issueDetails = null;
  const [displayComments, setDisplay] = useState(false);
  function handleClick(comments) {
    console.log(comments);
    setDisplay(!displayComments);
  }

  //TODO: show the comments box on click
  const [search, setSearch] = useState();

  if (!openIssues) {
    return <div>No results to display - enter search parameters</div>;
  }

  if (displayComments && openIssues) {
    issueDetails = (
      <>
        <form className="form">
          <input
            value={search}
            type="text"
            className="form-control"
            placeholder="Start search..."
          />
        </form>{" "}
        {openIssues.map((item, i) => {
          return (
            <Card
              size="small"
              title={item.title}
              style={{ margin: "5px 0px" }}
              key={i}
            >
              {item &&
                item.comments &&
                item.comments.nodes &&
                item.comments.nodes.map((comment, i) => {
                  console.log(comment);
                  return (
                    <div>
                      <p>{comment.bodyText}</p>
                      <p>{comment.author ? comment.author.login : null}</p>
                    </div>
                  );
                })}
            </Card>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div>
        {openIssues
          .filter(item => item.state === "OPEN")
          .map((open, i) => (
            <Card
              key={i}
              data={open}
              title={open.title}
              extra={open.state}
              style={{ margin: "5px 0px" }}
              size="small"
            >
              <Button
                onClick={() => handleClick(open.comments.nodes)}
                type="primary"
                ghost="true"
                shape="round"
                size="small"
              >
                View details{" "}
              </Button>
              {/* <a href={open.url}>{open.url}</a> */}
            </Card>
          ))}
      </div>

      <div
        className={
          issueDetails && issueDetails.length
            ? "commentsList"
            : "commentsList isHidden"
        }
      >
        <h1>Issue Details</h1>
        {issueDetails}
      </div>
    </>
  );
}

export default OpenIssues;
