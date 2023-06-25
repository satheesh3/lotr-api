/**
 * Represents a list of responses for a given type.
 * @interface
 * @template T The type of the response.
 */
export interface ListResponse<T> {
    /**
     * An array of objects of type T.
     */
    docs: T[];
    /**
     * The total number of objects of type T in the response.
     */
    total: number;
    /**
     * The maximum number of objects of type T that can be returned in the response.
     */
    limit: number;
    /**
     * The page number of the current page in the response.
     */
    page: number;
    /**
     * The offset of the results.
     */
    offset: number;
}