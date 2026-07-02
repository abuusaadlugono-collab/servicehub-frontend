import { NavLink, Outlet } from "react-router-dom";

function CustomerLayout() {
  return (
    <div className="container-fluid">

      <div className="row">

        <aside className="col-md-2 bg-primary text-white min-vh-100 p-3">

          <h3 className="mb-4">ElectroConnect</h3>

          <ul className="nav flex-column">

            <li className="nav-item mb-2">
              <NavLink
                to="/customer/dashboard"
                className="nav-link text-white"
              >
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item mb-2">
              <NavLink
                to="/customer/search"
                className="nav-link text-white"
              >
                Search Services
              </NavLink>
            </li>

            <li className="nav-item mb-2">
              <NavLink
                to="/customer/my-requests"
                className="nav-link text-white"
              >
                My Requests
              </NavLink>
            </li>

            <li className="nav-item mb-2">
              <NavLink
                to="/customer/profile"
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

export default CustomerLayout;