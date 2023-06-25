

/**
 * An interface representing a configuration object.
 * @interface
 */
export interface Config {
    /**
     * The access token to be used for authentication.
     * @type {string}
     */
    accessToken: string
}

/**
 * An interface representing a client object.
 * @interface
 */
export interface Client {
    /**
     * A method that returns the configuration object.
     * @returns {Config} The configuration object.
     */
    getConfig(): Config;
}