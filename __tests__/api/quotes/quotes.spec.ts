
import { Quote } from "../../../src/types/quote";
import { Quotes } from "../../../src/api/quotes";
import { ListRequestOptions } from "../../../src/types/request";
import { Client } from "../../../src/types/client";
import ApiError from "../../../src/api/error";

describe('Quotes', () => {
    let client: Client;
    let quotes: Quotes;

    beforeEach(() => {
        client = {
            getConfig: jest.fn(),
        };
        quotes = new Quotes(client);
    });

    describe('list', () => {
        it('should return a ListResponse object containing an array of Quote objects', async () => {
            const options: ListRequestOptions<Quote> = {
                filter: {
                    equals: {
                        movie: 'xx'
                    }
                }
            };
            const expectedResponse = {
                docs: [
                    {
                        "_id": "5cd96e05de30eff6ebcce7e9",
                        "dialog": "Deagol!",
                        "movie": "5cd95395de30eff6ebccde5d",
                        "character": "5cd99d4bde30eff6ebccfe9e",
                        "id": "5cd96e05de30eff6ebcce7e9"
                    },
                    {
                        "_id": "5cd96e05de30eff6ebcce7ea",
                        "dialog": "Deagol!",
                        "movie": "5cd95395de30eff6ebccde5d",
                        "character": "5cd99d4bde30eff6ebccfe9e",
                        "id": "5cd96e05de30eff6ebcce7ea"
                    },

                ],
                total: 1,
                limit: 1,
                offset: 1,
                page: 1
            }
            jest.spyOn(quotes, 'list').mockResolvedValue(expectedResponse)
            const response = await quotes.list(options);
            expect(quotes.list).toHaveBeenCalledWith(options)
            expect(response).toHaveProperty('docs');
            expect(Array.isArray(response.docs)).toBe(true);
            expect(response).toBe(expectedResponse)
        });
        it('should return a ListResponse object containing all Quote objects if no options are provided', async () => {
            const expectedResponse = {
                docs: [
                    {
                        "_id": "5cd96e05de30eff6ebcce7e9",
                        "dialog": "Deagol!",
                        "movie": "5cd95395de30eff6ebccde5d",
                        "character": "5cd99d4bde30eff6ebccfe9e",
                        "id": "5cd96e05de30eff6ebcce7e9"
                    },
                    {
                        "_id": "5cd96e05de30eff6ebcce7ea",
                        "dialog": "Deagol!",
                        "movie": "5cd95395de30eff6ebccde5d",
                        "character": "5cd99d4bde30eff6ebccfe9e",
                        "id": "5cd96e05de30eff6ebcce7ea"
                    },

                ],
                total: 1,
                limit: 1,
                offset: 1,
                page: 1
            }
            jest.spyOn(quotes, 'list').mockResolvedValue(expectedResponse)
            const response = await quotes.list();
            expect(quotes.list).toBeCalled()
            expect(response).toHaveProperty('docs');
            expect(Array.isArray(response.docs)).toBe(true);
            expect(response).toBe(expectedResponse)
        });
        it('should call request method from base api when requested any resources', async () => {
            const options: ListRequestOptions<Quote> = {
                filter: {
                    equals: {
                        movie: 'xx'
                    }
                }
            };
            const request = jest.spyOn(Quotes.prototype as any, 'request').mockResolvedValue({});
            await quotes.list(options)
            expect(request).toBeCalledWith({ url: '/quote?movie=xx', method: 'GET' })
        })
    });

    describe('get', () => {
        it('should return a ListResponse object containing a single Quote object', async () => {
            const id = '5cd96e05de30eff6ebcce7ea';
            const expectedResponse = {
                docs: [
                    {
                        "_id": "5cd96e05de30eff6ebcce7ea",
                        "dialog": "Deagol!",
                        "movie": "5cd95395de30eff6ebccde5d",
                        "character": "5cd99d4bde30eff6ebccfe9e",
                        "id": "5cd96e05de30eff6ebcce7ea"
                    },
                ],
                total: 1,
                limit: 1,
                offset: 1,
                page: 1
            }
            jest.spyOn(quotes, 'get').mockResolvedValue(expectedResponse)
            const response = await quotes.get(id);
            expect(quotes.get).toBeCalled()
            expect(response).toHaveProperty('docs');
            expect(Array.isArray(response.docs)).toBe(true);
            expect(response).toBe(expectedResponse)
            expect(response.docs[0].id).toBe(id)
        });
        it('should throw error when requested wrong resource', async () => {
            jest.spyOn(quotes, 'get').mockRejectedValue(new ApiError(404, 'xxxxx'));
            expect(quotes.get("xxx")).rejects.toThrowError()
        })
        it('should call request method from base api when requested any resources', async () => {
            const request = jest.spyOn(Quotes.prototype as any, 'request').mockResolvedValue({});
            await quotes.get("xxx")
            expect(request).toBeCalledWith({ url: '/quote/xxx', method: 'GET' })
        })

    });
});