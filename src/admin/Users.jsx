import { useEffect, useState } from "react";
import adminApi from "../api/adminApi";


const Users = () => {


  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {


    const loadUsers = async () => {


      try {


        const response = await adminApi.getAllUsers();


        setUsers(response.data);


      } catch (error) {


        console.log("Error fetching users:", error);


      } finally {


        setLoading(false);


      }


    };


    loadUsers();


  }, []);




  const handleDelete = async (id) => {


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );


    if (!confirmDelete) return;



    try {


      await adminApi.deleteUser(id);



      const response = await adminApi.getAllUsers();


      setUsers(response.data);



    } catch (error) {


      console.log("Delete error:", error);


    }


  };




  if (loading) {


    return <h2>Loading users...</h2>;


  }




  return (

    <div>


      <h1>Manage Users</h1>



      <table border="1" cellPadding="10">


        <thead>


          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

            <th>Action</th>

          </tr>


        </thead>




        <tbody>


          {

            users.length === 0 ? (

              <tr>

                <td colSpan="5">
                  No users found
                </td>

              </tr>


            ) : (


              users.map((user) => (


                <tr key={user.id}>


                  <td>
                    {user.id}
                  </td>


                  <td>
                    {user.name}
                  </td>


                  <td>
                    {user.email}
                  </td>


                  <td>
                    {user.role}
                  </td>



                  <td>


                    <button
                      onClick={() => handleDelete(user.id)}
                    >

                      Delete

                    </button>



                  </td>



                </tr>


              ))


            )

          }


        </tbody>


      </table>


    </div>

  );


};


export default Users;