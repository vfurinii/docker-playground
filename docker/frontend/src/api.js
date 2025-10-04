import axios from "axios";

const API_URL = "/api/users";

export const getUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createUser = async (name) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  return response.json();
};
