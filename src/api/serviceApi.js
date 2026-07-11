import axiosInstance from "./axiosInstance";

/**
 * ==========================
 * SERVICE API
 * ==========================
 */

// GET ALL SERVICES
export const getAllServices = async () => {
  const response = await axiosInstance.get("/services");
  return response.data;
};

// GET SERVICE BY ID
export const getServiceById = async (id) => {
  const response = await axiosInstance.get(`/services/${id}`);
  return response.data;
};

// CREATE SERVICE
export const createService = async (serviceData) => {
  const response = await axiosInstance.post("/services", serviceData);
  return response.data;
};

// UPDATE SERVICE
export const updateService = async (id, serviceData) => {
  const response = await axiosInstance.put(`/services/${id}`, serviceData);
  return response.data;
};

// DELETE SERVICE
export const deleteService = async (id) => {
  const response = await axiosInstance.delete(`/services/${id}`);
  return response.data;
};