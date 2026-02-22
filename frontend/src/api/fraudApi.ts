import axios from "axios";
import { FraudResponse } from "../types/FraudTypes";

const BASE_URL = "http://localhost:8080/api";

export const checkIP = async (ip: string): Promise<FraudResponse> => {
    const response = await axios.get(`${BASE_URL}/check?ip=${ip}`);
    return response.data;
};