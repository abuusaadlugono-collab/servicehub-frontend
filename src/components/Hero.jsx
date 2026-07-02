import SearchBar from "./SearchBar";

function Hero() {

  return (

    <section className="bg-primary text-white py-5">

      <div className="container text-center">

        <h1 className="display-4 fw-bold">

          Find Trusted Electronics Experts

        </h1>

        <p className="lead">

          Phone Repair • Laptop Repair • CCTV • Networking • Electrical

        </p>

        <div className="mt-4">

          <SearchBar />

        </div>

      </div>

    </section>

  );

}

export default Hero;