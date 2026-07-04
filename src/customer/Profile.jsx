import { useState } from "react";
import { FaUserCircle, FaSave } from "react-icons/fa";
import { updateProfile } from "../Services/customerService";

function Profile() {

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await updateProfile(profile);

      alert("Profile updated successfully.");

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">

          <h3 className="mb-0">
            <FaUserCircle className="me-2" />
            My Profile
          </h3>

        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={profile.phone}
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
                  className="form-control"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              <FaSave className="me-2" />
              Update Profile
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;