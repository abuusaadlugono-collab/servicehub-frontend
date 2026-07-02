function SearchBar() {
  return (

    <form className="row justify-content-center">

      <div className="col-lg-7">

        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search electronics services..."
        />

      </div>

      <div className="col-lg-2 mt-3 mt-lg-0">

        <button
          className="btn btn-warning btn-lg w-100"
          type="submit"
        >
          Search
        </button>

      </div>

    </form>

  );
}

export default SearchBar;