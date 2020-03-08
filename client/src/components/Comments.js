import React, { useState } from "react";
import { Form, Input } from "antd";

function Comments({ data }) {
  const [search, setSearch] = useState();

  if (!data.length) {
    return <p>No comments</p>;
  }

  function handleOnChange(e) {
    setSearch(e.target.value);
  }

  function showResults(comments) {
    let commentsFiltered = comments;
    if (search) {
      let toSearch = search.toLowerCase();
      commentsFiltered = comments.filter(element =>
        element.bodyText.toLowerCase().includes(toSearch)
      );
    }
    return commentsFiltered.map((item, i) => (
      <div key={i}>
        <p>{item.bodyText}</p>
        <p>from: {item.author ? item.author.login : null}</p>
      </div>
    ));
  }

  return (
    <>
      <p>Comments to this issue:</p>
      <Form size="small" style={{ width: 250 }}>
        <Input
          type="text"
          placeholder="Search in comments..."
          onChange={handleOnChange}
        />
      </Form>
      <div>{showResults(data)}</div>
    </>
  );
}

export default Comments;
