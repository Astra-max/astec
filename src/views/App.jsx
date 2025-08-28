import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Activity from "./Activity";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Chat from "../components/chat";
import DashboardUI from "./Dashboard";
import Layout from "../components/layout";


export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Home />
            </Layout>
            } />
          <Route path="/activity" element={
            <Layout>
              <Activity />
            </Layout>
            } />
          <Route path="/contact" element={
            <Layout>
              <Contact />
            </Layout>
            } />
          <Route path="/dashboard" element={<DashboardUI />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/work_station" element={<h2>My work station</h2>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
    </Router>
  );
}
