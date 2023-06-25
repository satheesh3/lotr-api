/**
 * Enum for filter operators used in the filter option of ListRequestOptions interface.
 */
export enum FilterOperatorEnum {
    equals = 'equals',
    notEquals = 'notEquals',
    includes = 'includes',
    excludes = 'excludes',
    exists = 'exists',
    notExists = 'notExists',
    greaterThan = 'greaterThan',
    lessThan = 'lessThan',
    greaterThanOrEqualTo = 'greaterThanOrEqualTo',
    lessThanOrEqualTo = 'lessThanOrEqualTo',
}

/**
 * This interface defines the options that can be used to request a list of items.
 * @template T The type of the items in the list.
 */
export interface ListRequestOptions<T> {

    /**
     * The maximum number of items to return in a single page of results.
     */
    limit?: number;

    /**
     * The page number of the results to return.
     */
    page?: number;

    /**
     * The number of items to skip before starting to return results.
     */
    offset?: number;

    /**
     * The field to sort the results by, and the direction to sort in.
     */
    sort?: {
        on: keyof Omit<T, '_id'>,
        by: 'asc' | 'desc'
    },

    /**
     * The filters to apply to the results.
     */
    filter?: {
        /**
         * The fields to filter by, and the values to filter for.
         */
        equals?: {
            [Q in keyof T]?: string | number | string[] | number[] | RegExp;
        },
        /**
         * The fields to filter by, and the values to exclude.
         */
        notEquals?: {
            [Q in keyof T]?: string | number | string[] | number[] | RegExp;
        },
        /**
         * The fields to filter by, and the values to search for within them.
         */
        includes?: {
            [Q in keyof T]?: string | number | string[] | number[] | RegExp;
        },
        /**
         * The fields to filter by, and the values to exclude from them.
         */
        excludes?: {
            [Q in keyof T]?: string | number | string[] | number[] | RegExp;
        },
        /**
         * The fields to filter by, and the values that must exist in them.
         */
        exists?: keyof T,
        /**
         * The fields to filter by, and the values that must not exist in them.
         */
        notExists?: keyof T,
        /**
         * The fields to filter by, and the values that must be greater than the specified value.
         */
        greaterThan?: {
            [Q in keyof T]?: number
        },
        /**
         * The fields to filter by, and the values that must be less than the specified value.
         */
        lessThan?: {
            [Q in keyof T]?: number
        },
        /**
         * The fields to filter by, and the values that must be less than or equal to the specified value.
         */
        lessThanOrEqualTo?: {
            [Q in keyof T]?: number
        },
        /**
         * The fields to filter by, and the values that must be greater than or equal to the specified value.
         */
        greaterThanOrEqualTo?: {
            [Q in keyof T]?: number
        }
    };
}
