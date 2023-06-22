/**
 * IMPORTS
 */
import { type AxiosRequestConfig } from "axios";

const configAxios: AxiosRequestConfig = {
	baseURL: "http://grupofigueiredo.com.br:1111/figconn",
	timeout: 10000,
};

/**
 * EXPORT
 */
export { configAxios };
