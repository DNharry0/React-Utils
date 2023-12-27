const BASE_URL = "http://localhost:4000/";
// import { BASE_URL } from "@/util/api";
import axios from "axios";

export const fetchCompanies = async () => {
  const { data } = await axios.get(`${BASE_URL}v1/admins/companies`, {
    params: {
      searchType: "email",
      searchWord: "",
      joinStartDate: "2022-01-01",
      joinEndDate: "2023-12-31",
    },
    withCredentials: true,
  });

  console.log("fetchCompanies api 정상작동. data:", data);
  return data.payload;
};