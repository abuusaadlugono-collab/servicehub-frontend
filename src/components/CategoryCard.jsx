function CategoryCard({ title, icon }) {

  return (

    <div className="col-md-3 mb-4">

      <div className="card shadow-sm h-100">

        <div className="card-body text-center">

          <div
            style={{
              fontSize: "50px"
            }}
          >
            {icon}
          </div>

          <h5 className="mt-3">

            {title}

          </h5>

        </div>

      </div>

    </div>

  );

}

export default CategoryCard;