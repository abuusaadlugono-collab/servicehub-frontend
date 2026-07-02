import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaSearch,
  FaEye,
} from "react-icons/fa";

function MyRequests() {
  const [requests] = useState([]);

  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold">
            My Requests
          </h2>

          <p className="text-muted">
            Track all your electronics service requests.
          </p>

        </div>

        <Link
          to="/customer/search"
          className="btn btn-primary"
        >
          <FaSearch className="me-2" />
          Search Services
        </Link>

      </div>

      {/* Empty State */}

      {requests.length === 0 ? (

        <div className="card shadow-sm border-0">

          <div className="card-body text-center py-5">

            <FaClipboardList
              size={60}
              className="text-secondary mb-3"
            />

            <h3>No Requests Yet</h3>

            <p className="text-muted">

              You haven't requested any electronics service yet.

            </p>

            <Link
              to="/customer/search"
              className="btn btn-primary mt-2"
            >
              Search Services
            </Link>

          </div>

        </div>

      ) : (

        <div className="table-responsive">

          <table className="table table-hover align-middle">

            <thead className="table-dark">

              <tr>

                <th>#</th>

                <th>Service</th>

                <th>Provider</th>

                <th>Status</th>

                <th>Date</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {requests.map((request, index) => (

                <tr key={request.id}>

                  <td>{index + 1}</td>

                  <td>{request.serviceName}</td>

                  <td>{request.providerName}</td>

                  <td>

                    <span className="badge bg-warning">

                      {request.status}

                    </span>

                  </td>

                  <td>{request.requestDate}</td>

                  <td>

                    <Link
                      to={`/customer/service/${request.serviceId}`}
                      className="btn btn-sm btn-info"
                    >
                      <FaEye />
                    </Link>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}

export default MyRequests;