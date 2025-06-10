import api from "../api";

export const login = async (username: string, password: string) => {
  const response = await api.post("/v1/authentication/login", { username, password });
  console.log(response);
  return response.data;
};
