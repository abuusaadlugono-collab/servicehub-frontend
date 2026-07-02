import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Register() {
  // 1. Kutengeneza state ya kuhifadhi data za form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    role: "", // Itashika CUSTOMER au PROVIDER
    password: "",
  });

  const navigate = useNavigate();

  // 2. Kazi ya kuchukua kila mabadiliko ya herufi kwenye input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Kazi ya kusubmit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kuzuia asisumbite kama hajachagua Account Type
    if (!formData.role) {
      alert("Tafadhali chagua aina ya akaunti (Register As)!");
      return;
    }

    // Kuhifadhi data kwenye localStorage (Hapa tunai-convert kuwa string)
    localStorage.setItem("registeredUser", JSON.stringify(formData));

    alert("Usajili Umefanikiwa! Sasa utapelekwa ukurasa wa Login.");

    // Kumpeleka mtumiaji kwenye login page
    navigate("/login");
  };

  return (
    <MainLayout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Create Account</h2>

                {/* Tumeongeza onSubmit hapa */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Register As</label>
                    <select
                      className="form-select"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Account Type</option>
                      <option value="CUSTOMER">Customer</option>
                      <option value="PROVIDER">Provider</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Create password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;