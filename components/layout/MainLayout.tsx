import React from "react";
import { Layout } from "antd";
import { MainHeader } from "./MainHeader";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <MainHeader />
      <Layout>
        <Layout style={{ overflow: "auto" }}>{children}</Layout>
      </Layout>
    </Layout>
  );
};
