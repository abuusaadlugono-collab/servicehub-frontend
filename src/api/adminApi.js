import axiosInstance from "./axiosInstance";


const getAllUsers = () => {
  return axiosInstance.get("/admin/users");
};


const deleteUser = (id) => {
  return axiosInstance.delete(`/admin/users/${id}`);
};


const activateUser = (id) => {
  return axiosInstance.put(`/admin/users/${id}/activate`);
};


const deactivateUser = (id) => {
  return axiosInstance.put(`/admin/users/${id}/deactivate`);
};


export default {
  getAllUsers,
  deleteUser,
  activateUser,
  deactivateUser
};