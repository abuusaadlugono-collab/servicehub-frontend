import { useState } from "react";
import { FaUserCircle, FaSave } from "react-icons/fa";
import { updateProfile } from "../services/providerService";

function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    specialization: "",
    experience: "",
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
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="container-fluid">

      <div className="card shadow border-0">

        <div className="card-header bg-primary text-white">

          <h3 className="mb-0">
            <FaUserCircle className="me-2" />
            Provider Profile
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

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Electronics Specialization
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="specialization"
                  placeholder="Phone Repair, TV Repair..."
                  value={profile.specialization}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Years of Experience
                </label>

                <input
                  type="number"
                  className="form-control"
                  name="experience"
                  value={profile.experience}
                  onChange={handleChange}
                />

              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              <FaSave className="me-2" />
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;