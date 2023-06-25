import { LOTR } from '../../../src/index'
import { ListRequestOptions } from "../../../src/types/request";
import { Quote } from '../../../src/types/quote';
import ApiError from '../../../src/api/error';

describe('Quotes', () => {
    let lotr: LOTR;
    let lotr2: LOTR
    let quoteId: string;

    beforeAll(() => {
        lotr = new LOTR({
            accessToken: process.env.SANDBOX_TOKEN as string
        })
        lotr2 = new LOTR({
            accessToken: 'xxx'
        })
    });

    describe('list', () => {
        it('should throw unauthorized error', async () => {
            expect(lotr2.quotes.list()).rejects.toThrow(new ApiError(401, 'xx'))
        })
        it('should respond with list of movies from the api', async () => {
            const response = await lotr.quotes.list()
            expect(response.docs).toBeDefined();
            expect(response.docs.length).toBeGreaterThanOrEqual(0);
            expect(response.docs[0]).toHaveProperty('dialog')
        });
        it('should respond with correct list of movies when using query options', async () => {
            const options: ListRequestOptions<Quote> = {
                limit: 5,
                offset: 0,
                sort: {
                    by: 'desc',
                    on: 'dialog'
                }
            };
            const response = await lotr.quotes.list(options)
            quoteId = response.docs[0]._id
            expect(response.docs).toBeDefined();
            expect(response.docs.length).toBe(5);
            expect(response.docs[0]).toHaveProperty('movie')
        })
    });

    describe('get', () => {
        it('should respond with correct movie using the id from the api', async () => {
            const response = await lotr.quotes.get(quoteId)
            expect(response.docs).toBeDefined();
            expect(response.docs[0]._id).toBe(quoteId);
        });
    });
});