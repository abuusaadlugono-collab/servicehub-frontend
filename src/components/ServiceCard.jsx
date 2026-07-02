import { Link } from "react-router-dom";

function ServiceCard({

  id,

  title,

  provider,

  category,

  location,

  price

}) {

  return (

    <div className="card shadow-sm mb-4">

      <div className="card-body">

        <h4>{title}</h4>

        <p>

          <strong>Provider:</strong> {provider}

        </p>

        <p>

          <strong>Category:</strong> {category}

        </p>

        <p>

          <strong>Location:</strong> {location}

        </p>

        <p className="text-success fw-bold">

          TZS {price}

        </p>

        <Link

          className="btn btn-primary"

          to={`/service/${id}`}

        >
          View Details
        </Link>

      </div>

    </div>

  );

}

export default ServiceCard;