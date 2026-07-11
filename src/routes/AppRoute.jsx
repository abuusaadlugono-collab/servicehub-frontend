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
import AdminLayout from "../layouts/AdminLayout";


// =======================
// Provider Pages
// =======================

import Dashboard from "../provider/Dashboard";
import AddService from "../provider/AddService";
import MyServices from "../provider/MyServices";
import Profile from "../provider/Profile";


// =======================
// Customer Pages
// =======================

import CustomerDashboard from "../customer/Dashboard";
import Search from "../customer/Search";
import MyRequests from "../customer/MyRequests";
import CustomerProfile from "../customer/Profile";


// =======================
// Admin Pages
// =======================

import AdminDashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import AdminServices from "../admin/Services";
import Requests from "../admin/Requests";



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
            path="my-requests"
            element={<MyRequests />}
          />


          <Route
            path="profile"
            element={<CustomerProfile />}
          />


        </Route>






        {/* =======================
             ADMIN ROUTES
        ======================== */}


        <Route
          path="/admin"
          element={<AdminLayout />}
        >


          <Route
            index
            element={<AdminDashboard />}
          />


          <Route
            path="dashboard"
            element={<AdminDashboard />}
          />


          <Route
            path="users"
            element={<Users />}
          />


          <Route
            path="services"
            element={<AdminServices />}
          />


          <Route
            path="requests"
            element={<Requests />}
          />


        </Route>



      </Routes>


    </BrowserRouter>

  );

}


export default AppRoutes;