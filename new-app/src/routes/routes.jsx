import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import ClassRoom from "../components/classroom";
import Home from "../views/Home";
import Contact from "../views/Contact";
import Chat from "../components/chat";
import UnauthLayout, { UnAuthorized } from "../components/adminDash/layout";
import WorkSpace from "../workspace/workspace";
import Dashboard from "../views/Dashboard";
import NoPage from "../views/NoPage";
import Layout from "../components/layout";
import Activity from "../views/Activity";
import RedirectAdminDash from "./redirect";
import { AdminDashLayout } from "../components/adminDash/layout";
import Users, { User } from "../components/adminDash/users";
import AdminActivity from "../components/adminDash/admin-activity";
import AdminCourses from "../components/adminDash/admin-course";
import Profile from "../components/adminDash/profile";
import AdminResource from "../components/adminDash/admin-resos";
import AdminAnalysis from "../components/adminDash/admin-analys";
import { AdminHome } from "../components/adminDash/adminDash";
import MiddleUI from "../components/adminDash/middle-section";
import Line from "../components/DashComponents/Line";
import Forgotpass from "../auth/forgotpass";

/**
 * Handles admin route
 */
export function AdminRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectAdminDash />} />
        <Route path="/auth/forgot-password" element={<Forgotpass />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminDashLayout>
              <AdminHome />
              <Line />
              <MiddleUI />
              <Users />
            </AdminDashLayout>
          }
        />
        <Route
          path="/admin/dashboard/users"
          element={
            <AdminDashLayout>
              <Users />
              <MiddleUI />
            </AdminDashLayout>
          }
        />
        <Route
          path="/admin/dashboard/users/:userId"
          element={
            <AdminDashLayout>
              <User />
              <Users />
              <MiddleUI />
            </AdminDashLayout>
          }
        />
        <Route
          path="/admin/dashboard/activity"
          element={
            <AdminDashLayout>
              <AdminActivity />
              <MiddleUI />
              <Users />
            </AdminDashLayout>
          }
        />
        <Route
          path="/admin/dashboard/analysis"
          element={
            <AdminDashLayout>
              <AdminAnalysis />
              <MiddleUI />
              <Users />
            </AdminDashLayout>
          }
        />
        <Route
          path="/admin/dashboard/course"
          element={
            <AdminDashLayout>
              <AdminCourses />
              <MiddleUI />
              <Users />
            </AdminDashLayout>
          }
        />
        <Route
          path="/admin/dashboard/profile"
          element={
            <AdminDashLayout>
              <Profile />
            </AdminDashLayout>
          }
        />
        <Route
          path="/admin/dashboard/resource"
          element={
            <AdminDashLayout>
              <AdminResource />
              <MiddleUI />
              <Users />
            </AdminDashLayout>
          }
        />
        <Route
          path="*"
          element={
            <AdminDashLayout>
              <NoPage />
            </AdminDashLayout>
          }
        />
      </Routes>
    </Router>
  );
}

/**
 * Handles user route
 */
export function UserRoute() {
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
        <Route path="/auth/forgot-password" element={<Forgotpass />} />
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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/dashboard/workspace"
          element={
            <ProtectedRoutes>
              <WorkSpace />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoutes>
              <Chat />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/work_space"
          element={
            <ProtectedRoutes>
              <WorkSpace />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/classroom/:course"
          element={
            <ProtectedRoutes>
              <ClassRoom />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoutes>
              <UnAuthorized />
            </ProtectedRoutes>
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoutes>
              <UnauthLayout>
                <NoPage />
              </UnauthLayout>
            </ProtectedRoutes>
          }
        />
      </Routes>
      <Outlet />
    </Router>
  );
}
