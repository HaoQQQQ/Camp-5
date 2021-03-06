import {
  Layout,
  Select,
  Typography,
} from "antd";

import {
  BorderlessTableOutlined,
  FileSearchOutlined,
  ProfileOutlined,
  AppstoreOutlined,
  DiffOutlined
} from "@ant-design/icons";
import React, {useState } from "react";
import { Routes, Route } from "react-router-dom";

// --------less or css-------------------------
import "antd/dist/antd.less";
import "./App.less";

// -------router comp--------------------------
// import MemberProfile from "./pages/Member-profile";
import MemberOrder from './pages/Member-order';
import Home from './pages/Home';
import Tent from './pages/TentCRUD';
import Activity from "./pages/Activity";
import CampProfile from "./pages/CampProfile";
import CampOrder from "./pages/Camp-order";
import OrderDetails from "./pages/OrderDetails";

// -------page comp----------------------------
import LeftSideBar from "./comp/leftSideBar";
import TopicMenu from './comp/TopicMenu';
import Header1 from "./comp/header";


const { Content } = Layout;
const { Option } = Select;
const { Title } = Typography;


function App() {
  // ----導入menu context---------------------
  const topics = ["首頁", "營地資料", "管理訂單", "帳篷管理", "活動管理"];
  const menuIcons = [
    <BorderlessTableOutlined />,
    <ProfileOutlined />,
    <FileSearchOutlined />,
    <AppstoreOutlined />,
    <DiffOutlined />,
  ];
  const linkTo = ["/dashBoard", "/campFile", "/campOrders", "/tentCRUD", "/activity"];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState("0");
  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
    setContentIndex(+key);
  };
  const Menu = (
    <TopicMenu
      linkTo={linkTo}
      topics={topics}
      menuIcons={menuIcons}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
  // -------------------------

  return (
    <Layout style={{ height: "100vh" }}>
      <LeftSideBar menu={Menu} />
      <Layout>
        <Header1 menu={Menu} />
        <Content
          style={{
            margin: "0 16px",
            overflow: "scroll",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dashBoard" element={<Home />}/>
            <Route path="/tentCRUD" element={<Tent />}/>
            <Route path="/activity" element={<Activity />}/>
            <Route path="/campFile" element={<CampProfile />}/>
            <Route path="/campOrders" element={<CampOrder />}/>
            <Route path="/orderDetails/:orderId" element={<OrderDetails />}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}


export default App;
