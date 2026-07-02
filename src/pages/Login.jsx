import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Login() {
  // 1. State ya kushika yaliyoandikwa kwenye input za email na password
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // 2. Kuchukua mabadiliko ya herufi kwenye input
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // 3. Kazi ya kuingia (Login Logic) fomu ikisubmitwa
  const handleLogin = (e) => {
    e.preventDefault();

    // Leta data ya mtumiaji aliyesajiliwa kutoka localStorage
    const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

    // Kama hakuna mtu aliyesajiliwa kabisa kwenye mfumo
    if (!savedUser) {
      alert("Hakuna akaunti iliyopatikana kwenye mfumo huu! Tafadhali jisajili kwanza.");
      return;
    }

    // Kuhakiki kama email na password alizoweka zinalingana na zile za usajili
    if (
      credentials.email === savedUser.email &&
      credentials.password === savedUser.password
    ) {
      alert(`Umeingia kwa mafanikio! Karibu ${savedUser.fullName}`);

      // ANGALIA ROLE ILI KUMPELEKA DASHBOARD HUSIKA
      if (savedUser.role === "PROVIDER") {
        navigate("/provider"); // Inampeleka moja kwa moja kwenye Dashboard ya Provider
      } else if (savedUser.role === "CUSTOMER") {
        navigate("/customer"); // Inampeleka Home (au badilisha kuwa njia ya Dashboard ya Customer ukiiweka)
      }
    } else {
      alert("Barua pepe (Email) au Nywila (Password) sio sahihi!");
    }
  };

  return (
    <MainLayout>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Login</h2>

                {/* Tumeongeza onSubmit hapa */}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button className="btn btn-primary w-100" type="submit">
                    Login
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