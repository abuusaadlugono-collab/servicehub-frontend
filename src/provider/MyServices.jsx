import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

function MyServices() {
  /*
    Baadaye Spring Boot itajaza array hii.
    Mfano:
    const [services, setServices] = useState([]);
  */

  const services = [];

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>
          <h2 className="fw-bold">My Services</h2>

          <p className="text-muted mb-0">
            Manage all your electronics services.
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

      {/* Empty State */}

      {services.length === 0 ? (

        <div className="card shadow-sm">

          <div className="card-body text-center py-5">

            <h4 className="fw-bold">
              No Services Found
            </h4>

            <p className="text-muted mt-3">
              You haven't added any electronics service yet.
            </p>

            <Link
              to="/provider/add-service"
              className="btn btn-primary mt-3"
            >
              Add Your First Service
            </Link>

          </div>

        </div>

      ) : (

        <div className="table-responsive">

          <table className="table table-hover align-middle">

            <thead className="table-light">

              <tr>

                <th>#</th>

                <th>Service</th>

                <th>Category</th>

                <th>Price</th>

                <th>Status</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              {services.map((service, index) => (

                <tr key={service.id}>

                  <td>{index + 1}</td>

                  <td>{service.serviceName}</td>

                  <td>{service.category}</td>

                  <td>{service.price}</td>

                  <td>

                    <span className="badge bg-success">
                      Active
                    </span>

                  </td>

                  <td>

                    <Link
                      to={`/provider/service/${service.id}`}
                      className="btn btn-sm btn-outline-primary me-2"
                    >
                      View
                    </Link>

                    <button className="btn btn-sm btn-outline-warning me-2">
                      Edit
                    </button>

                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>

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

export default MyServices;