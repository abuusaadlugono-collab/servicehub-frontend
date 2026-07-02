import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaTools,
} from "react-icons/fa";

import { searchServices } from "../services/customerService";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await searchServices(
        searchTerm,
        category
      );

      setServices(data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold">
            Search Electronics Services
          </h2>

          <p className="text-muted">
            Find trusted electronics service providers.
          </p>

        </div>

      </div>

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <form onSubmit={handleSearch}>

            <div className="row">

              <div className="col-md-4 mb-3">

                <label className="form-label">
                  Search
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search service..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                />

              </div>

              <div className="col-md-3 mb-3">

                <label className="form-label">
                  Category
                </label>

                <select
                  className="form-select"
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                >
                  <option value="">
                    All Categories
                  </option>

                  <option>
                    Phone Repair
                  </option>

                  <option>
                    Laptop Repair
                  </option>

                  <option>
                    TV Repair
                  </option>

                  <option>
                    Computer Repair
                  </option>

                </select>

              </div>

              <div className="col-md-3 mb-3">

                <label className="form-label">
                  Location
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                />

              </div>

              <div className="col-md-2 d-flex align-items-end mb-3">

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  <FaSearch className="me-2" />
                  Search
                </button>

              </div>

            </div>

          </form>

        </div>

      </div>

      {loading ? (

        <div className="text-center py-5">

          <h4>Loading...</h4>

        </div>

      ) : services.length === 0 ? (

        <div className="card shadow-sm border-0">

          <div className="card-body text-center py-5">

            <FaTools
              size={60}
              className="text-secondary mb-3"
            />

            <h3>No Services Found</h3>

            <p className="text-muted">

              No electronics services match your search.

            </p>

          </div>

        </div>

      ) : (

        <div className="row">

          {services.map((service) => (

            <div
              className="col-md-4 mb-4"
              key={service.id}
            >

              <div className="card shadow-sm border-0 h-100">

                <div className="card-body">

                  <h5 className="fw-bold">

                    {service.serviceName}

                  </h5>

                  <p className="text-muted">

                    {service.category}

                  </p>

                  <p>

                    {service.description}

                  </p>

                  <p>

                    <FaMapMarkerAlt className="me-2 text-danger" />

                    {service.location}

                  </p>

                  <h5 className="text-primary">

                    {service.price} TZS

                  </h5>

                  <Link
                    to={`/customer/service/${service.id}`}
                    className="btn btn-outline-primary w-100 mt-3"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Search;