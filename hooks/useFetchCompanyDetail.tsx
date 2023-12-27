const BASE_URL = "http://localhost:3000/api/v1";

// import { BASE_URL } from "@/util/api";
import axios from "axios";

// 승인, 미승인, 탈퇴, 이용 정지
export type MemberType = "approved" | "notApproved" | "withdrawal" | "suspended";

export type CompanyDetailResponse = {
  payload: {
    memberIdx: string;
    phone: string;
    name: string;
    businessNumber: string;
    createdAt: Date;
    address: string;
    detailAddress: string | null;
    ceoName: string;
    businessLicenseFilename: string;
    businessLicense: string;
    email: string;
    status: MemberType; 
  };
};

export const fetchCompanyDetail = async (companyIdx: string): Promise<CompanyDetailResponse> => {
  const { data } = await axios.get<CompanyDetailResponse>(`${BASE_URL}v1/admins/companies/${companyIdx}`, { withCredentials: true });
  return data;
};
