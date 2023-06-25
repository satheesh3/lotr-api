import { LOTR } from '../src/index';
import { Movies } from '../src/api/movies';
import { Quotes } from '../src/api/quotes';

describe('LOTR Module', () => {
    let accessToken: string;
    beforeAll(() => {
        accessToken = 'some_access_key';
    });
    test('should expose a Quote API interface', () => {
        const lotr = new LOTR({
            accessToken
        });
        expect(lotr.quotes).toBeInstanceOf(Quotes);
    });
    test('should expose a Movie API interface', () => {
        const lotr = new LOTR({
            accessToken
        });
        expect(lotr.movies).toBeInstanceOf(Movies);
    });
});