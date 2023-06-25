/**
 * Represents an API error with a specific status code, message, and error type.
 */
export default class ApiError extends Error {
    readonly message: string;
    readonly type: string
    readonly statusCode: number

    /**
     * Creates a new instance of the ApiError class.
     * @param statusCode The HTTP status code of the error.
     * @param message The error message to display. Optional.
     */
    constructor(statusCode: number, message?: string) {
        super(message)
        this.message = this.getErrorMessage(statusCode)
        this.type = this.getErrorType(statusCode)
        this.statusCode = statusCode
    }

    /**
     * Returns the error message based on the HTTP status code.
     * @param statusCode The HTTP status code of the error.
     * @returns The error message corresponding to the HTTP status code.
     */
    private getErrorMessage(statusCode: number): string {
        switch (statusCode) {
            case 401:
                return "Unauthorized Request. Please check the Access Token."
            case 429:
                return "Too many requests. Only 100 requests allowed with in 10 mins."
            case 404:
                return "Resource does not exist. Validate your input."
            default:
                return "Something went wrong. Please try again sometime later."
        }
    }

    /**
     * Returns the error type based on the HTTP status code.
     * @param statusCode The HTTP status code of the error.
     * @returns The error type corresponding to the HTTP status code.
     */
    private getErrorType(statusCode: number): string {
        switch (statusCode) {
            case 401:
                return "unauthorized"
            case 429:
                return "request_limit_reached"
            case 404:
                return "not_found"
            default:
                return "internal_server_error"
        }
    }
}