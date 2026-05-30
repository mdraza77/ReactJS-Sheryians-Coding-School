import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

// Register
export const register = async (username, email, password) => {
  try {
    const response = api.post("/register", {
      username,
      email,
      password,
    });
  } catch (error) {
    throw error;
  }
};

// Login
export const login = async (email, password) => {
  try {
    const response = api.post("/login", {
      email,
      password,
    });
  } catch (error) {
    throw error;
  }
};

// getMe
export const getMe = async () => {
  try {
    const response = await api.post("/get-me");
    return response.data;
  } catch (error) {
    throw error;
  }
};
