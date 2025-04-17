import React from "react";
import { Layout, Menu } from "antd";
import { useSnapshot } from "valtio";
import state from "store";
import UserManagement from "./UserManagement";
import BookingManagement from "./BookingManagement";
import TrainManagement from "./TrainManagement";
import DestinationsManagement from "./DestinationsManagement";

const { Header, Content, Sider } = Layout;

const AdminDashboard = () => {
  const snap = useSnapshot(state);
  const handleClic = (index) => {
    state.activeIndex = index;
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item
            onClick={() => {
              handleClic(1);
            }}
            key="1"
          >
            Users
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              handleClic(2);
            }}
          >
            Trains
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => {
              handleClic(3);
            }}
          >
            Bookings
          </Menu.Item>
          <Menu.Item
            key="4"
            onClick={() => {
              handleClic(4);
            }}
          >
            Content
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: "100%",
            }}
          >
            {snap.activeIndex === 1 && <UserManagement />}
            {snap.activeIndex === 2 && <TrainManagement />}
            {snap.activeIndex === 3 && <BookingManagement />}
            {snap.activeIndex === 4 && <DestinationsManagement />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
