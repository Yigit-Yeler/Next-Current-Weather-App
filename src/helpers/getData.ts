import { HttpMethods } from "@/constants/HttpMethods";
import axios from "axios";

export async function getData<T>(url: string): Promise<T> {
    try {
        const response = await axios({
            url,
            method: HttpMethods.GET,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};