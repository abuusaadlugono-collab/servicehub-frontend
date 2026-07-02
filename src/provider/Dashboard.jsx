import { Link } from "react-router-dom";
import {
  FaTools,
  FaClipboardList,
  FaCheckCircle,
  FaStar,
  FaPlusCircle,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold">Provider Dashboard</h2>

          <p className="text-muted mb-0">
            Welcome back. Manage your electronics services here.
          </p>
        </div>

        <Link
          to="/provider/add-service"
          className="btn btn-primary"
        >
          <FaPlusCircle className="me-2" />
          Add Service
        </Link>

      </div>

      {/* Statistics */}

      <div className="row g-4 mb-5">

        <div className="col-lg-3 col-md-6">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body text-center">

              <FaTools
                className="text-primary mb-3"
                size={40}
              />

              <h3 className="fw-bold">0</h3>

              <p className="text-muted mb-0">
                My Services
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body text-center">

              <FaClipboardList
                className="text-warning mb-3"
                size={40}
              />

              <h3 className="fw-bold">0</h3>

              <p className="text-muted mb-0">
                Pending Requests
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body text-center">

              <FaCheckCircle
                className="text-success mb-3"
                size={40}
              />

              <h3 className="fw-bold">0</h3>

              <p className="text-muted mb-0">
                Completed Jobs
              </p>

            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="card shadow-sm border-0 h-100">

            <div className="card-body text-center">

              <FaStar
                className="text-danger mb-3"
                size={40}
              />

              <h3 className="fw-bold">0.0</h3>

              <p className="text-muted mb-0">
                Rating
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Empty State */}

      <div className="card shadow-sm border-0">

        <div className="card-body text-center py-5">

          <FaTools
            size={60}
            className="text-primary mb-3"
          />

          <h3 className="fw-bold">
            No Services Available
          </h3>

          <p className="text-muted">

            You haven't published any electronics service yet.
            Start by creating your first service.

          </p>

          <Link
            to="/provider/add-service"
            className="btn btn-primary mt-3"
          >
            Add First Service
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;