import { Client } from "../../types/client";
import { ListRequestOptions } from "../../types/request";
import { Quote } from "../../types/quote";
import { ListResponse } from "../../types/response";
import encodeOptions from "../../utils/encodeOptions";
import { BaseApi } from "../api";

export class Quotes extends BaseApi {
    private static readonly BASE_PATH = '/quote';

    constructor(client: Client) {
        super(client)
    }

    /**
     * List quotes
     * 
     * @param {ListRequestOptions<Quote>} options An optional object containing query parameters to filter the results.
     * @returns {ListResponse<Quote>} A Promise that resolves to a ListResponse object containing an array of Quote objects.
     */
    list(
        options?: ListRequestOptions<Quote>,
    ): Promise<ListResponse<Quote>> {
        return this.request<ListResponse<Quote>>({
            url: `${Quotes.BASE_PATH}${encodeOptions<Quote>(options)}`,
            method: 'GET'
        })
    }

    /**
     * Get a quote by ID
     * 
     * @param id The ID of the quote to retrieve.
     * @returns {ListResponse<Quote>} A Promise that resolves to a ListResponse object containing a single Quote object.
     */
    get(id: string): Promise<ListResponse<Quote>> {
        return this.request<ListResponse<Quote>>({
            url: `${Quotes.BASE_PATH}/${id}`,
            method: 'GET'
        })
    }
}