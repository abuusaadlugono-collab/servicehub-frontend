import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Layouts
import ProviderLayout from "../layouts/ProviderLayout";

// Provider Pages
import Dashboard from "../provider/Dashboard";
import AddService from "../provider/AddService";
import MyServices from "../provider/MyServices";
import ServiceDetails from "../provider/ServiceDetails";
import Profile from "../provider/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Provider Routes */}

        <Route path="/provider" element={<ProviderLayout />}>

          <Route index element={<Dashboard />} />

          
          <Route
  path="dashboard"
  element={
    <div className="p-5">
      <h1>Customer Dashboard Working</h1>
    </div>
  }
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

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;