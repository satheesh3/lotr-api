import { Client } from "../../types/client";
import { ListRequestOptions } from "../../types/request";
import { ListResponse } from "../../types/response";
import encodeOptions from "../../utils/encodeOptions";
import { Movie } from "../../types/movie";
import { Quote } from "../../types/quote";
import { BaseApi } from "../api";

/**
 * Class representing the Movies API.
 * @extends BaseApi
 */
export class Movies extends BaseApi {
    /**
     * The base path for the Movies API.
     * @type {string}
     * @readonly
     */
    private static readonly BASE_PATH = '/movie';

    /**
     * Create a new instance of the Movies API.
     * @param {Client} client - The HTTP client to be used for making requests.
     */
    constructor(client: Client) {
        super(client)
    }

    /**
     * Get a list of movies.
     * @param {ListRequestOptions<Movie>} options - The options to be used for the request.
     * @returns {Promise<ListResponse<Movie>>} A promise that resolves to a list of movies.
     */
    list(
        options?: ListRequestOptions<Movie>,
    ): Promise<ListResponse<Movie>> {
        return this.request<ListResponse<Movie>>({
            url: `${Movies.BASE_PATH}${encodeOptions<Movie>(options)}`,
            method: 'GET'
        })
    }

    /**
     * Get a movie by ID.
     * @param {string} id - The ID of the movie to be retrieved.
     * @returns {Promise<ListResponse<Movie>>} A promise that resolves to the requested movie.
     */
    get(id: string): Promise<ListResponse<Movie>> {
        return this.request<ListResponse<Movie>>({
            url: `${Movies.BASE_PATH}/${id}`,
            method: 'GET'
        })
    }

    /**
     * Get a list of quotes for a movie.
     * @param {string} id - The ID of the movie for which to retrieve quotes.
     * @returns {Promise<ListResponse<Quote>>} A promise that resolves to a list of quotes for the specified movie.
     */
    quotes(id: string): Promise<ListResponse<Quote>> {
        return this.request<ListResponse<Quote>>({
            url: `${Movies.BASE_PATH}/${id}/quote`,
            method: 'GET'
        })
    }
}