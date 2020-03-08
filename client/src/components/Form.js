import React, { useState } from "react";
import API from "./api/API.js";
import Tabs from "../components/Tabs";
import { Form, Input, Button } from "antd";

function GetData() {
  const [repoName, setRepoName] = useState();
  const [token, setToken] = useState();
  const [repoOwner, setRepoOwner] = useState();
  const [repoData, setData] = useState({
    pullRequests: [],
    openIssues: [],
    errors: []
  });
  const [state, setState] = useState({ loading: false, iconLoading: false });

  function handleFormSubmit() {
    setToken(token);
    setRepoName(repoName);
    setRepoOwner(repoOwner);

    API.getRepoData(repoName, repoOwner, token)
      .then(res => {
        const repo =
          res && res.data && res.data.data && res.data.data.repository
            ? res.data.data.repository
            : {};
        setData({
          errors: res.data && res.data.errors ? res.data.errors : null,
          pullRequests: repo.pullRequests ? repo.pullRequests.nodes : [],
          issues: repo.issues ? repo.issues.nodes : []
        });
        setState({ loading: false });
      })
      .catch(error => {
        alert(error.response.data.message);
        setState({ loading: false });
      });
  }

  function enterLoading() {
    setState({ loading: true });
  }

  return (
    <>
      <Form layout="inline" onFinish={handleFormSubmit}>
        <Form.Item label="Enter repository name:">
          <Input onChange={e => setRepoName(e.target.value)} required />
        </Form.Item>
        <Form.Item label="Enter repository owner:">
          <Input onChange={e => setRepoOwner(e.target.value)} required />
        </Form.Item>
        <Form.Item label="Enter your GitHub token:">
          <Input onChange={e => setToken(e.target.value)} required />
        </Form.Item>
        <Form.Item>
          <Button
            type="danger"
            htmlType="submit"
            shape="round"
            loading={state.loading}
            onClick={enterLoading}
          >
            Search
          </Button>
        </Form.Item>
      </Form>
      <Tabs githubData={repoData} />
    </>
  );
}

export default GetData;
