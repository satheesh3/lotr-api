import { Movie } from "../../src/types/movie";
import { ListRequestOptions } from "../../src/types/request";
import encodeOptions from "../../src/utils/encodeOptions";

describe('generateQueryString', () => {
    it('should return an empty string if no options are provided', () => {
        expect(encodeOptions()).toEqual('');
    });
    it('should return an empty string if empty options are provied', () => {
        expect(encodeOptions({})).toEqual('');
    });
    it('should throw an error if an unknown filter operator is provided', () => {
        const options = {
            filter: {
                unknownOperator: {
                    name: 'John'
                }
            }
        } as ListRequestOptions<Movie>;
        expect(() => encodeOptions(options)).toThrowError('Unknown filter operator: unknownOperator');
    });
    it('shuld return a string of query parameters with valid partial parameters', async () => {
        const options: ListRequestOptions<Movie> = {
            limit: 10,
            page: 1,
            offset: 0,
            sort: {
                on: 'name',
                by: 'asc'
            },
        }
        const expectedQueryString = '?limit=10&page=1&sort=name:asc';
        expect(encodeOptions<Movie>(options)).toEqual(expectedQueryString)
    })
    it('should return a string of query parameters to be used in a URL', () => {
        const options: ListRequestOptions<Movie> = {
            limit: 10,
            page: 1,
            offset: 0,
            sort: {
                on: 'name',
                by: 'asc'
            },
            filter: {
                equals: {
                    name: 'John',
                },
                notEquals: {
                    name: 'Jane',
                },
                includes: {
                    name: ['John', 'Jane'],
                },
                excludes: {
                    name: ['Bob', 'Alice'],
                },
                exists: 'academyAwardWins',
                notExists: 'rottenTomatoesScore',
                greaterThan: {
                    runtimeInMinutes: 25
                },
                lessThan: {
                    runtimeInMinutes: 30
                },
                greaterThanOrEqualTo: {
                    runtimeInMinutes: 20
                },
                lessThanOrEqualTo: {
                    runtimeInMinutes: 25
                }
            }
        };
        const expectedQueryString = '?limit=10&page=1&sort=name:asc&name=John&name!=Jane&name=John,Jane&name!=Bob,Alice&academyAwardWins&!rottenTomatoesScore&runtimeInMinutes>25&runtimeInMinutes<30&runtimeInMinutes>=20&runtimeInMinutes<=25';
        expect(encodeOptions<Movie>(options)).toEqual(expectedQueryString);
    });

    it('return empty if options were given undefined', () => {
        const options: ListRequestOptions<Movie> = {
            filter: {
                equals: undefined,
                notEquals: undefined,
                includes: undefined,
                excludes: undefined,
                exists: undefined,
                notExists: undefined,
                greaterThan: undefined,
                lessThan: undefined,
                greaterThanOrEqualTo: undefined,
                lessThanOrEqualTo: undefined,
            }
        }
        expect(encodeOptions<Movie>(options)).toEqual('');
    });

});