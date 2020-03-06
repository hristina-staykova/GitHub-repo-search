import React from "react";
import Form from "../components/Form";
import { Layout, PageHeader } from "antd";

function Home() {
  return (
    <Layout>
      <div className="site-page-header">
        <PageHeader
          title="React App & GitHub GraphQL"
          subTitle="Hristina Staykova"
          style={{ backgroundColor: "#69c0ff" }}
        />
      </div>
      <div style={{ padding: "50px" }}>
        <Layout.Content>
          <Form />
        </Layout.Content>
      </div>
    </Layout>
  );
}

export default Home;
