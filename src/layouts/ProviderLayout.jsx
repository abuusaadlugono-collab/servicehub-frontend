import { NavLink, Outlet } from "react-router-dom";

function ProviderLayout() {
  return (
    <div className="container-fluid">

      <div className="row">

        <aside className="col-md-2 bg-dark text-white min-vh-100 p-3">

          <h3 className="mb-4">ElectroConnect</h3>

          <ul className="nav flex-column">

            <li className="nav-item">
              <NavLink
                to="/provider/dashboard"
                className="nav-link text-white"
              >
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/provider/my-services"
                className="nav-link text-white"
              >
                My Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/provider/add-service"
                className="nav-link text-white"
              >
                Add Service
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/provider/profile"
                className="nav-link text-white"
              >
                Profile
              </NavLink>
            </li>

          </ul>

        </aside>

        <main className="col-md-10 p-4">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default ProviderLayout;