import React from "react";
import { Card } from "antd";

function PullRequests({ pullRequests, errors }) {
  if (errors && errors.length) {
    return <div>{errors[0].message}</div>;
  }
  if (!pullRequests.length) {
    return <div>No results to display - enter search parameters</div>;
  }

  return (
    <div>
      {pullRequests.map((item, i) => (
        <Card
          size="small"
          title={item.title}
          style={{ margin: "5px 0px" }}
          extra={item.state}
          key={i}
        >
          <p>
            Author: {item.author.login} on {item.createdAt.substr(0, 10)}
          </p>
          <p>{item.bodyText}</p>
          <a href={item.url}>View on GitHub</a>
        </Card>
      ))}
    </div>
  );
}

export default PullRequests;
