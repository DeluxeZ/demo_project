import React from 'react';
import './App.css';
import {Layout} from "antd";
import {HeaderSection} from "./components/HeaderSection/HeaderSection";

function App() {
  const { Header, Content, Sider} = Layout;
  return (
    <div className="App">
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <HeaderSection />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0' }}>
            <Sider width={200}>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: '100%' }}>Content</Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
