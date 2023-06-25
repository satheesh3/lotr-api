import ApiError from '../../src/api/error';

describe('ApiError', () => {
    describe('constructor', () => {
        it('should create an instance of ApiError', () => {
            const apiError = new ApiError(404);
            expect(apiError).toBeInstanceOf(ApiError);
        });

        it('should set the statusCode property', () => {
            const apiError = new ApiError(404);
            expect(apiError.statusCode).toBe(404);
        });

        it('should set the message property based on the statusCode', () => {
            const apiError = new ApiError(401);
            expect(apiError.message).toBe('Unauthorized Request. Please check the Access Token.');
            expect(apiError.type).toBe('unauthorized')
        });

        it('should set the message property to a default value if statusCode is not recognized', () => {
            const apiError = new ApiError(500);
            expect(apiError.message).toBe('Something went wrong. Please try again sometime later.');
        });

        it('should set the message property to the provided message if available', () => {
            const apiError = new ApiError(404, 'Resource not found');
            expect(apiError.message).toBe('Resource does not exist. Validate your input.');
        });

        it('should set the type property based on the statusCode', () => {
            const apiError = new ApiError(429);
            expect(apiError.type).toBe('request_limit_reached');
        });

        it('should set the type property to a default value if statusCode is not recognized', () => {
            const apiError = new ApiError(500);
            expect(apiError.type).toBe('internal_server_error');
        });
    });

    describe('getErrorMessage', () => {
        it('should return the correct error message for statusCode 401', () => {
            const apiError = new ApiError(401);
            expect(apiError['getErrorMessage'](401)).toBe('Unauthorized Request. Please check the Access Token.');
        });

        it('should return the correct error message for statusCode 429', () => {
            const apiError = new ApiError(429);
            expect(apiError['getErrorMessage'](429)).toBe('Too many requests. Only 100 requests allowed with in 10 mins.');
        });

        it('should return the correct error message for statusCode 404', () => {
            const apiError = new ApiError(404);
            expect(apiError['getErrorMessage'](404)).toBe('Resource does not exist. Validate your input.');
        });

        it('should return the default error message for unrecognized statusCodes', () => {
            const apiError = new ApiError(500);
            expect(apiError['getErrorMessage'](500)).toBe('Something went wrong. Please try again sometime later.');
        });
    });

    describe('getErrorType', () => {
        it('should return the correct error type for statusCode 401', () => {
            const apiError = new ApiError(401);
            expect(apiError['getErrorType'](401)).toBe('unauthorized');
        });

        it('should return the correct error type for statusCode 429', () => {
            const apiError = new ApiError(429);
            expect(apiError['getErrorType'](429)).toBe('request_limit_reached');
        });

        it('should return the correct error type for statusCode 404', () => {
            const apiError = new ApiError(404);
            expect(apiError['getErrorType'](404)).toBe('not_found');
        });

        it('should return the default error type for unrecognized statusCodes', () => {
            const apiError = new ApiError(500);
            expect(apiError['getErrorType'](500)).toBe('internal_server_error');
        });
    });
});