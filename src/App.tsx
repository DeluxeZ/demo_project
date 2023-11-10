import React from 'react';
import './App.css';
import {Layout} from "antd";
import {HeaderSection} from "./components/HeaderSection/HeaderSection";
import {ContentSection} from "./components/ContentSection/ContentSection";
import {OperatorProvider} from "./providers/OperatorProvider";
import {Operator} from "./components/Operator/Operator";

function App() {
  return (
    <div className="App">
      <OperatorProvider>
        <>
          <Layout style={{ height: '100%' }}>
            <HeaderSection />
            <ContentSection />
          </Layout>
          <Operator />
        </>
      </OperatorProvider>
    </div>
  );
}

export default App;
