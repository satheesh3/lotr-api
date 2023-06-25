import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Client, Config } from "../types/client";
import ApiError from "./error";

/**
 * An interface representing a client request.
 * @interface
 */
export interface ClientRequest {
    /**
     * The URL of the request.
     * @type {string}
     */
    url: string,
    /**
     * The HTTP method of the request.
     * @type {'POST' | 'GET' | 'PUT' | 'DELETE'}
     */
    method: 'POST' | 'GET' | 'PUT' | 'DELETE'
}

export class BaseApi {
    private config: Config;

    /**
     * Creates an instance of BaseApi.
     * @param {Client} client - An instance of the Client class.
     */
    constructor(client: Client) {
        this.config = client.getConfig();
    }

    /**
     * Sends an HTTP request to the REST API.
     * @template T - The type of the response data.
     * @param {ClientRequest} req - An object containing the request URL, method, and any other options.
     * @returns {Promise<T>} - A Promise that resolves with the response data.
     * @throws {ApiError} - If the request fails, an ApiError is thrown with the HTTP status code and error message.
     */
    protected async request<T>(req: ClientRequest): Promise<T> {
        try {
            const axiosConfig: AxiosRequestConfig = {
                baseURL: 'https://the-one-api.dev/v2',
                url: req.url,
                method: req.method,
                headers: {
                    Authorization: `Bearer ${this.config.accessToken}`
                }
            };
            const response: AxiosResponse = await axios(axiosConfig);
            const json: T = response.data as T;
            return json;
        } catch (err: any) {
            throw new ApiError(err.response?.status, err.response?.data);
        }
    }
}