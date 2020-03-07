import React, { useState } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Collapse } from "antd";
import { Card } from "antd";

const { Panel } = Collapse;

function Acordion({ issues, issueState }) {
  const [search, setSearch] = useState();

  function handleOnChange(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function showResults(comments) {
    let commentsFiltered = comments.slice();
    if (search) {
      let toSearch = search.toLowerCase();
      console.log(commentsFiltered);
      commentsFiltered = comments.filter(element =>
        element.bodyText.toLowerCase().includes(toSearch)
      );
      console.log("filtered array", commentsFiltered);
    }
    return commentsFiltered.map((item, i) => (
      <div key={i}>
        <p>{item.bodyText}</p>
        <p>{item.author ? item.author.login : null}</p>
      </div>
    ));
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
              <a href={issue.url}>{issue.url}</a>
              <p>Created at: {issue.createdAt}</p>
              <p>{issue.state}</p>
              <form>
                <input
                  type="text"
                  placeholder="Search in comments..."
                  onChange={handleOnChange}
                />
              </form>
              <div>{showResults(issue.comments.nodes)}</div>
            </Panel>
          ))}
      </Collapse>
    </>
  );
}

export default Acordion;
