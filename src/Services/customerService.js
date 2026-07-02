// =========================================
// Customer Service
// Ready for Spring Boot Integration
// =========================================

// Search Services
export const searchServices = async (searchTerm, category) => {
  /*
    SPRING BOOT

    return await api.get("/customer/services", {
      params: {
        search: searchTerm,
        category: category,
      },
    });
  */

  console.log("Search:", searchTerm, category);

  return [];
};

// Get Single Service
export const getServiceDetails = async (id) => {
  /*
    return await api.get(`/customer/services/${id}`);
  */

  console.log("Service ID:", id);

  return null;
};

// Request Service
export const requestService = async (serviceId) => {
  /*
    return await api.post(`/customer/request/${serviceId}`);
  */

  console.log("Request:", serviceId);
};

// My Requests
export const getMyRequests = async () => {
  /*
    return await api.get("/customer/requests");
  */

  return [];
};

// Customer Profile
export const getProfile = async () => {
  /*
    return await api.get("/customer/profile");
  */

  return {
    fullName: "",
    email: "",
    phone: "",
    location: "",
  };
};

// Update Profile
export const updateProfile = async (profile) => {
  /*
    return await api.put("/customer/profile", profile);
  */

  console.log(profile);
};