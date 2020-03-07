import React from "react";
import PullRequests from "./PullRequests";
import Acordion from "./Issues";
import { Tabs } from "antd";
import "antd/dist/antd.css";

function TabsView({ githubData }) {
  const { TabPane } = Tabs;

  return (
    <div style={{ margin: "50px 0" }}>
      <Tabs type="card">
        <TabPane tab="Pull Requests" key="1">
          <PullRequests
            errors={githubData.errors}
            pullRequests={githubData.pullRequests}
          />
        </TabPane>
        <TabPane tab="Open Issues" key="2">
          <Acordion
            errors={githubData.errors}
            issues={githubData.issues}
            issueState="OPEN"
          />
        </TabPane>
        <TabPane tab="Closed Issues" key="3">
          <Acordion
            errors={githubData.errors}
            issues={githubData.issues}
            issueState="CLOSED"
          />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default TabsView;
