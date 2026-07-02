import { Link, useParams } from "react-router-dom";

function ServiceDetails() {

  const { id } = useParams();

  return (

    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">

          <h3 className="mb-0">
            Service Details
          </h3>

        </div>

        <div className="card-body">

          <div className="row">

            <div className="col-md-6 mb-3">

              <h6>Service ID</h6>

              <p>{id}</p>

            </div>

            <div className="col-md-6 mb-3">

              <h6>Service Name</h6>

              <p>Waiting for Spring Boot...</p>

            </div>

            <div className="col-md-6 mb-3">

              <h6>Category</h6>

              <p>Waiting for Spring Boot...</p>

            </div>

            <div className="col-md-6 mb-3">

              <h6>Price</h6>

              <p>Waiting for Spring Boot...</p>

            </div>

            <div className="col-md-6 mb-3">

              <h6>Location</h6>

              <p>Waiting for Spring Boot...</p>

            </div>

            <div className="col-md-6 mb-3">

              <h6>Status</h6>

              <p>Waiting for Spring Boot...</p>

            </div>

            <div className="col-12">

              <h6>Description</h6>

              <p>

                This page is ready to display complete
                service information after backend integration.

              </p>

            </div>

          </div>

          <Link
            to="/provider/my-services"
            className="btn btn-secondary mt-3"
          >
            Back
          </Link>

        </div>

      </div>

    </div>

  );
}

export default ServiceDetails;