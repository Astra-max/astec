import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Activity from "./Activity";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Chat from "../components/chat";
import Dashboard from "./Dashboard";
import Layout from "../components/layout";
import WorkSpace from "../workspace/workspace";
import { useSelector } from "react-redux";
import Login from "../auth/login";

export default function App() {
  const {token} = useSelector((state)=>state.auth)
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/activity"
          element={
            <Layout>
              <Activity />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route path="/dashboard" element={token?<Dashboard />:<Login />} />
        <Route path="/chat" element={token?<Chat />:<Login />} />
        <Route path="/work_station" element={token?<WorkSpace/>:<Login/>} />
        <Route path="*" element={token?<NoPage />:<Login />} />
      </Routes>
    </Router>
  );
}
