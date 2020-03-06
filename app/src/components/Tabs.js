import React from "react";
import PullRequests from "./PullRequests";
import Acordion from "./Acordion";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import "../index.css";

function TabsView(props) {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <div style={{ margin: "50px 0" }}>
      <Tabs onChange={callback} type="card">
        <TabPane tab="Pull Requests" key="1">
          <PullRequests
            errors={props.githubData.errors}
            pullRequests={props.githubData.pullRequests}
          />
        </TabPane>
        <TabPane tab="Open Issues" key="2">
          <Acordion
            errors={props.githubData.errors}
            issues={props.githubData.issues}
            issueState="OPEN"
          />
        </TabPane>
        <TabPane tab="Closed Issues" key="3">
          <Acordion
            errors={props.githubData.errors}
            issues={props.githubData.issues}
            issueState="CLOSED"
          />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabsView;
