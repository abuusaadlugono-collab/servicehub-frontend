import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { loginUser } from "../api/authApi";

function Login() {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      setLoading(true);

      const response = await loginUser(credentials);

      alert(response.message);

      localStorage.setItem("token", response.token);
localStorage.setItem("role", response.role);

      // Redirect kulingana na role
      switch (response.role) {

        case "ADMIN":
          navigate("/admin/dashboard");
          break;

        case "PROVIDER":
          navigate("/provider/dashboard");
          break;

        case "CUSTOMER":
          navigate("/customer/dashboard");
          break;

        default:
          navigate("/");
      }

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Email au Password si sahihi"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <MainLayout>
      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-lg-5">

            <div className="card shadow">

              <div className="card-body p-4">

                <h2 className="text-center mb-4">
                  Login
                </h2>

                <form onSubmit={handleLogin}>

                  <div className="mb-3">
                    <label>Email</label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password</label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    className="btn btn-primary w-100"
                    type="submit"
                    disabled={loading}
                  >

                    {loading ? "Logging in..." : "Login"}

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

export default Login;