const BASE_URL = "http://localhost:3000/";
// import { BASE_URL } from "@/util/api";
import axios from "axios";

export const fetchNotices = async (searchWord: string) => {
  const { data } = await axios.get(`${BASE_URL}v1/admins/notices`, {
    params: { searchWord },
    withCredentials: true,
  });
  return data;
};