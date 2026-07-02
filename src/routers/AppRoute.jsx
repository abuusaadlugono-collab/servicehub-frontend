import { BrowserRouter, Routes, Route } from "react-router-dom";

// =======================
// Public Pages
// =======================

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

// =======================
// Layouts
// =======================

import ProviderLayout from "../layouts/ProviderLayout";
import CustomerLayout from "../layouts/CustomerLayout";

// =======================
// Provider Pages
// =======================

import Dashboard from "../provider/Dashboard";
import AddService from "../provider/AddService";
import MyServices from "../provider/MyServices";
import ServiceDetails from "../provider/ServiceDetails";
import Profile from "../provider/Profile";

// =======================
// Customer Pages
// =======================

import CustomerDashboard from "../customer/Dashboard";
import Search from "../customer/Search";
import CustomerServiceDetails from "../customer/ServiceDetails";
import MyRequests from "../customer/MyRequests";
import CustomerProfile from "../customer/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =======================
             PUBLIC ROUTES
        ======================== */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* =======================
             PROVIDER ROUTES
        ======================== */}

        <Route
          path="/provider"
          element={<ProviderLayout />}
        >

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="add-service"
            element={<AddService />}
          />

          <Route
            path="my-services"
            element={<MyServices />}
          />

          <Route
            path="service/:id"
            element={<ServiceDetails />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

        </Route>

        {/* =======================
             CUSTOMER ROUTES
        ======================== */}

        <Route
          path="/customer"
          element={<CustomerLayout />}
        >

          <Route
            index
            element={<CustomerDashboard />}
          />

          <Route
            path="dashboard"
            element={<CustomerDashboard />}
          />

          <Route
            path="search"
            element={<Search />}
          />

          <Route
            path="service/:id"
            element={<CustomerServiceDetails />}
          />

          <Route
            path="my-requests"
            element={<MyRequests />}
          />

          <Route
            path="profile"
            element={<CustomerProfile />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;