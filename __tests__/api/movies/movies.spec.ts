import { Client } from "../../../src/types/client";
import { Movies } from "../../../src/api/movies";
import { ListRequestOptions } from "../../../src/types/request";
import { Movie } from "../../../src/types/movie";

describe('Movies', () => {
    let client: Client;
    let movies: Movies;

    beforeEach(() => {
        client = {
            getConfig: jest.fn(),
        };
        movies = new Movies(client);
    });

    describe('list', () => {

        it('should call the API with the correct URL and method', async () => {
            const options: ListRequestOptions<Movie> = {
                limit: 10,
                offset: 0,
                sort: {
                    by: 'desc',
                    on: 'name'
                }
            };
            const expectedResponse = {
                docs: [
                    {
                        _id: '5cd95395de30eff6ebccfea8',
                        name: 'xx',
                        runtimeInMinutes: 50,
                        budgetInMillions: 50,
                        boxOfficeRevenueInMillions: 50,
                        academyAwardNominations: 50,
                        academyAwardWins: 50,
                        rottenTomatoesScore: 7,
                    },
                    {
                        _id: '5c2345670eff6ebccfea8',
                        runtimeInMinutes: 20,
                        name: 'xx',
                        budgetInMillions: 20,
                        boxOfficeRevenueInMillions: 34,
                        academyAwardNominations: 50,
                        academyAwardWins: 50,
                        rottenTomatoesScore: 3,
                    },
                ],
                total: 1,
                limit: 1,
                offset: 1,
                page: 1
            };
            jest.spyOn(movies, 'list').mockResolvedValue(expectedResponse)
            await movies.list(options)
            expect(movies.list).toHaveBeenCalledWith(options);
            expect(movies.list(options)).resolves.toBe(expectedResponse)
        });
        it('should call request method from base api when requested any resources', async () => {
            const request = jest.spyOn(Movies.prototype as any, 'request').mockResolvedValue({});
            const options: ListRequestOptions<Movie> = {
                limit: 10,
                offset: 10,
                sort: {
                    by: 'desc',
                    on: 'name'
                }
            };
            await movies.list(options)
            expect(request).toBeCalledWith({ url: '/movie?limit=10&offset=10&sort=name:desc', method: 'GET' })
        })
    });

    describe('get', () => {
        it('should call the API with the correct URL and method', async () => {
            const expectedResponse = {
                docs: [
                    {
                        _id: '5cd95395de30eff6ebccfea8',
                        runtimeInMinutes: 50,
                        name: 'xx',
                        budgetInMillions: 50,
                        boxOfficeRevenueInMillions: 50,
                        academyAwardNominations: 50,
                        academyAwardWins: 50,
                        rottenTomatoesScore: 7,
                    },
                ],
                total: 1,
                limit: 1,
                offset: 1,
                page: 1
            };
            const id = '5cd95395de30eff6ebccfea8';
            jest.spyOn(movies, 'get').mockResolvedValue(expectedResponse)
            expect(movies.get(id)).resolves.toBe(expectedResponse)
        });
        it('should call request method from base api when requested any resources', async () => {
            const request = jest.spyOn(Movies.prototype as any, 'request').mockResolvedValue({});
            await movies.get("xxx")
            expect(request).toHaveBeenCalledWith({
                url: '/movie/xxx', method: 'GET'
            })
        })
    });

    describe('quotes', () => {
        it('should call the API with the correct URL and method', async () => {
            const id = '5cd95395de30eff6ebccfea8';
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
            jest.spyOn(movies, 'quotes').mockResolvedValue(expectedResponse)
            await movies.quotes(id)
            expect(movies.quotes).toHaveBeenCalled();
            expect(movies.quotes(id)).resolves.toBe(expectedResponse)
        });
        it('should call request method from base api when requested any resources', async () => {
            const request = jest.spyOn(Movies.prototype as any, 'request').mockResolvedValue({});
            await movies.quotes("abc")
            expect(request).toHaveBeenCalledWith({ url: '/movie/abc/quote', method: 'GET' })
        })
    });
});