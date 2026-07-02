import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <div className="container py-5">

        <h1 className="fw-bold text-center mb-4">
          About ElectroConnect
        </h1>

        <p className="lead text-center">
          ElectroConnect is a modern electronics service marketplace
          connecting customers with trusted electronics professionals.
        </p>

        <div className="row mt-5">

          <div className="col-md-6">

            <h3>Our Mission</h3>

            <p>
              To simplify access to professional electronics services
              while creating opportunities for skilled technicians.
            </p>

          </div>

          <div className="col-md-6">

            <h3>Our Vision</h3>

            <p>
              To become the leading electronics service marketplace
              across Africa.
            </p>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default About;