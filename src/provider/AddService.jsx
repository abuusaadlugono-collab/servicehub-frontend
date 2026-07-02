import { useState } from "react";
import { FaSave } from "react-icons/fa";

function AddService() {
  const [formData, setFormData] = useState({
    serviceName: "",
    category: "",
    description: "",
    price: "",
    location: "",
    experience: "",
    estimatedTime: "",
    availability: "Available",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    /*
      SPRING BOOT

      await providerService.addService(formData);
    */
  };

  return (
    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">

          <h3 className="mb-0">
            Add New Electronics Service
          </h3>

        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Service Name
                </label>

                <input
                  type="text"
                  name="serviceName"
                  className="form-control"
                  value={formData.serviceName}
                  onChange={handleChange}
                  placeholder="Laptop Repair"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Category
                </label>

                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select Category
                  </option>

                  <option>Phone Repair</option>

                  <option>Laptop Repair</option>

                  <option>TV Repair</option>

                  <option>Computer Repair</option>

                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Price (TZS)
                </label>

                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Dar es Salaam"
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Years of Experience
                </label>

                <input
                  type="number"
                  name="experience"
                  className="form-control"
                  value={formData.experience}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Estimated Time
                </label>

                <input
                  type="text"
                  name="estimatedTime"
                  className="form-control"
                  value={formData.estimatedTime}
                  onChange={handleChange}
                  placeholder="2 Hours"
                />

              </div>

              <div className="col-12 mb-3">

                <label className="form-label">
                  Description
                </label>

                <textarea
                  name="description"
                  rows="5"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your electronics service..."
                  required
                ></textarea>

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Availability
                </label>

                <select
                  name="availability"
                  className="form-select"
                  value={formData.availability}
                  onChange={handleChange}
                >
                  <option>Available</option>

                  <option>Busy</option>

                  <option>Unavailable</option>

                </select>

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Service Image
                </label>

                <input
                  type="file"
                  name="image"
                  className="form-control"
                  accept="image/*"
                  onChange={handleChange}
                />

              </div>

            </div>

            <button
              className="btn btn-primary mt-3"
              type="submit"
            >
              <FaSave className="me-2" />
              Save Service
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddService;