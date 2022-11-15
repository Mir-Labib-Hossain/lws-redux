import React from "react";
import Form from "./components/Form";
import Layout from "./components/Layout";
import TopCard from "./components/TopCard";
import Transactions from "./components/Transactions";

const App: React.FC = () => {
  return (
    <Layout>
      <>
        <TopCard />
        <Form />
        <Transactions />
      </>
    </Layout>
  );
};

export default App;
