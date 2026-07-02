// ===============================
// Provider Services
// Ready for Spring Boot
// ===============================

// Dashboard
export const getDashboard = async () => {
  /*
    return await api.get("/provider/dashboard");
  */

  return {
    totalServices: 0,
    pendingRequests: 0,
    completedJobs: 0,
    rating: 0,
  };
};

// My Services
export const getMyServices = async () => {
  /*
    return await api.get("/provider/services");
  */

  return [];
};

// Single Service
export const getServiceById = async (id) => {
  /*
    return await api.get(`/provider/services/${id}`);
  */

  console.log("Loading Service:", id);

  return null;
};

// Add Service
export const addService = async (serviceData) => {
  /*
    return await api.post("/provider/services", serviceData);
  */

  console.log(serviceData);
};

// Update Service
export const updateService = async (id, serviceData) => {
  /*
    return await api.put(`/provider/services/${id}`, serviceData);
  */

  console.log(id, serviceData);
};

// Delete Service
export const deleteService = async (id) => {
  /*
    return await api.delete(`/provider/services/${id}`);
  */

  console.log(id);
};

// Provider Profile
export const getProfile = async () => {
  /*
    return await api.get("/provider/profile");
  */

  return {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    bio: "",
  };
};

// Update Profile
export const updateProfile = async (profileData) => {
  /*
    return await api.put("/provider/profile", profileData);
  */

  console.log(profileData);
};