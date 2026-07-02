function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Create Account",
      description:
        "Register as a Customer to find services or as a Provider to offer your electronics services.",
    },
    {
      id: 2,
      title: "Search or Post",
      description:
        "Customers search for electronics services while Providers post their available services.",
    },
    {
      id: 3,
      title: "Connect & Complete",
      description:
        "When customer requirements match a provider's service, they connect and complete the job.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">How ElectroConnect Works</h2>
          <p className="text-muted">
            Three simple steps to connect customers with electronics professionals.
          </p>
        </div>

        <div className="row">
          {steps.map((step) => (
            <div className="col-md-4 mb-4" key={step.id}>
              <div className="card shadow-sm border-0 h-100 text-center">
                <div className="card-body">

                  <div
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      fontSize: "28px",
                      fontWeight: "bold",
                    }}
                  >
                    {step.id}
                  </div>

                  <h4>{step.title}</h4>

                  <p className="text-muted">
                    {step.description}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;