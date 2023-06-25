import { FilterOperatorEnum, ListRequestOptions } from '../types/request';

/**
 * This function takes in a ListRequestOptions object and returns a string of query parameters
 * to be used in a URL for filtering and sorting data.
 *
 * @param options An object containing options for filtering and sorting data.
 * @returns A string of query parameters to be used in a URL.
 */
export default function <T>(options?: ListRequestOptions<T>): string {
    if (!options) return '';

    const { limit, page, offset, sort, filter } = options;
    const params = [];

    if (limit) params.push(`limit=${limit}`);

    if (page) params.push(`page=${page}`);

    if (offset) params.push(`offset=${offset}`);

    if (sort) {
        params.push(`sort=${sort.on.toString()}:${sort.by}`);
    }

    if (filter) {
        Object.keys(filter).forEach((operator) => {
            switch (operator) {
                case FilterOperatorEnum.equals:
                    Object.entries(filter.equals || {}).forEach((entry) => {
                        const key = entry[0];
                        const value = Array(entry[1]).flat();
                        params.push(`${key}=${value.join(",")}`);
                    });
                    break;
                case FilterOperatorEnum.notEquals:
                    Object.entries(filter.notEquals || {}).forEach((entry) => {
                        const key = entry[0];
                        const value = entry[1];
                        params.push(`${key}!=${value}`);
                    });
                    break;
                case FilterOperatorEnum.includes:
                    Object.entries(filter.includes || {}).forEach((entry) => {
                        const key = entry[0];
                        const value = Array(entry[1]).flat();
                        params.push(`${key}=${value.join(',')}`);
                    });
                    break;
                case FilterOperatorEnum.excludes:
                    Object.entries(filter.excludes || {}).forEach((entry) => {
                        const key = entry[0];
                        const value = Array(entry[1]).flat();
                        params.push(`${key}!=${value.join(',')}`);
                    });
                    break;
                case FilterOperatorEnum.exists:
                    if (filter.exists) params.push(`${filter.exists.toString()}`);
                    break;
                case FilterOperatorEnum.notExists:
                    if (filter.notExists) params.push(`!${filter.notExists.toString()}`);
                    break;
                case FilterOperatorEnum.greaterThan:
                    Object.entries(filter.greaterThan || {}).forEach((entry) => {
                        const key = entry[0];
                        const value = entry[1];
                        params.push(`${key}>${value}`);
                    });
                    break;
                case FilterOperatorEnum.lessThan:
                    Object.entries(filter.lessThan || {}).forEach((entry) => {
                        const key = entry[0];
                        const value = entry[1];
                        params.push(`${key}<${value}`);
                    });
                    break;
                case FilterOperatorEnum.greaterThanOrEqualTo:
                    Object.entries(filter.greaterThanOrEqualTo || {}).forEach((entry) => {
                        const key = entry[0];
                        const value = entry[1];
                        params.push(`${key}>=${value}`);
                    });
                    break;
                case FilterOperatorEnum.lessThanOrEqualTo:
                    Object.entries(filter.lessThanOrEqualTo || {}).forEach((entry) => {
                        const key = entry[0];
                        const value = entry[1];
                        params.push(`${key}<=${value}`);
                    });
                    break;
                default:
                    throw new Error(`Unknown filter operator: ${operator}`);
            }
        });
    }
    return params.length ? `?${params.join('&')}` : '';
}