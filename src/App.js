import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import Layout from "./global/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import CreateBlogPage from "./pages/CreateBlogPage";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-blog" element={<CreateBlogPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
