import axios from "axios";
import { useQuery } from "react-query";

const api = axios.create({
  // baseURL: `${BASE_URL}/api/v1` as string,
  baseURL: `http://127.0.0.1:8000` as string,
  headers: {
    // "Content-Type": "application/json",
    // Vary: "Accept",
  },
});
const useGetContent = () => {
  return useQuery(["content"], () =>
    api.get(`/security/content/`).then((res) => res.data)
  );
};

export { useGetContent };
