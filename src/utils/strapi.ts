import { strapiAxiosInstance } from "src/utils/axios";
import { AxiosResponse } from "axios";
import Config from "src/config";

const auth = {
  identifier: Config.ApiEnv.strapiUser,
  password: Config.ApiEnv.strapiPass
};

export async function fetchStrapiToken() {
  const url = `/auth/local`;
  const params = "identifier=test@test.com&password=password";
  const config = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  };
  try {
    const response: AxiosResponse = await strapiAxiosInstance.post(url, params, config);
    console.log(response.data, "STRAPI RESPONSE");
    return response.data;
  } catch (error) {
    throw error;
  }
}
