import React from 'react';
import './App.css';
import {Layout, theme} from "antd";
import {HeaderSection} from "./components/HeaderSection/HeaderSection";

function App() {
  const { Header, Content, Sider} = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div className="App">
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <HeaderSection />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
            <Sider style={{ background: colorBgContainer }} width={200}>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
