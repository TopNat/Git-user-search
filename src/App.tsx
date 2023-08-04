import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { UserRepos } from "./pages/UserRepos";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:login" element={<UserRepos />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
