import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>

      <nav style={{
        padding: "15px",
        background: "#222",
        color: "white"
      }}>

        <Link 
          to="/admin/dashboard"
          style={{color:"white", marginRight:"20px"}}
        >
          Dashboard
        </Link>


        <Link 
          to="/admin/users"
          style={{color:"white", marginRight:"20px"}}
        >
          Users
        </Link>


        <Link 
          to="/admin/services"
          style={{color:"white", marginRight:"20px"}}
        >
          Services
        </Link>


        <Link 
          to="/admin/requests"
          style={{color:"white"}}
        >
          Requests
        </Link>

      </nav>


      <main>
        <Outlet />
      </main>

    </div>
  );
};


export default AdminLayout;