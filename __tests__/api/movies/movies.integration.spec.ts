import { LOTR } from '../../../src/index'
import { ListRequestOptions } from "../../../src/types/request";
import { Movie } from "../../../src/types/movie";

describe('Movies', () => {
    let lotr: LOTR;
    let movieId: string;

    beforeAll(() => {
        lotr = new LOTR({
            accessToken: process.env.SANDBOX_TOKEN as string
        })
    });

    describe('list', () => {

        it('should respond with list of movies from the api', async () => {
            const response = await lotr.movies.list()
            expect(response.docs).toBeDefined();
            expect(response.docs.length).toBeGreaterThanOrEqual(0);
            expect(response.docs[0]).toHaveProperty('name')
        });
        it('should respond with correct list of movies when using query options', async () => {
            const options: ListRequestOptions<Movie> = {
                limit: 5,
                offset: 0,
                sort: {
                    by: 'desc',
                    on: 'name'
                }
            };
            const response = await lotr.movies.list(options)
            expect(response.docs).toBeDefined();
            expect(response.docs.length).toBe(5);
        })
        it('should respond with correct list of movies when using filter query options', async () => {
            const options: ListRequestOptions<Movie> = {
                filter: {
                    equals: {
                        name: '/The Return of the King/'
                    }
                }
            };
            const response = await lotr.movies.list(options)
            movieId = response.docs[0]._id
            expect(response.docs).toBeDefined();
            expect(response.docs[0].name.toLowerCase()).toContain('the return of the king')
        })
    });

    describe('get', () => {
        it('should respond with correct movie using the id from the api', async () => {
            const response = await lotr.movies.get(movieId)
            expect(response.docs).toBeDefined();
            expect(response.docs[0]._id).toBe(movieId);
        });
    });

    describe('quotes', () => {
        it('should respond with list of quotes of a movie from the API', async () => {
            const response = await lotr.movies.quotes(movieId)
            expect(response.docs).toBeDefined();
            expect(response.docs[0].movie).toBe(movieId);
        });
    });
});