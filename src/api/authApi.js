import axiosInstance from "./axiosInstance";

/**
 * ==========================
 * AUTH API
 * ==========================
 */

// REGISTER
export const registerUser = async (userData) => {

  const response = await axiosInstance.post(
    "/auth/register",
    userData
  );

  return response.data;
};

// LOGIN
export const loginUser = async (loginData) => {

  const response = await axiosInstance.post(
    "/auth/login",
    loginData
  );

  if (response.data.token) {
    localStorage.setItem(
      "token",
      response.data.token
    );
  }

  return response.data;
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
};

// CHECK LOGIN
export const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

// GET TOKEN
export const getToken = () => {
  return localStorage.getItem("token");
};