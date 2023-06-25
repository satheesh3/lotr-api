import { Movies } from "./api/movies";
import { Quotes } from "./api/quotes";
import { Client, Config } from "./types/client";


/**
 * Lord of the Rings client for Node.js.
 * 
 * @class
 * @implements Client
 */
export class LOTR implements Client {
  /**
   * The configuration for the client.
   * 
   * @private
   * @property {Config} _config - The configuration object.
   */
  private _config: Config;

  /**
   * The Quotes API.
   * 
   * @public
   * @property {Quotes} quotes - The Quotes API object.
   */
  public quotes: Quotes;

  /**
   * The Movies API.
   * 
   * @public
   * @property {Movies} movies - The Movies API object.
   */
  public movies: Movies;

  /**
   * Creates an instance of LOTR.
   * 
   * @constructor
   * @param {Config} props - The configuration object containing the access token.
   */
  constructor(props: Config) {
    // Set the configuration object
    this._config = props;

    // Create instances of the Quotes and Movies APIs
    this.quotes = new Quotes(this);
    this.movies = new Movies(this);
  }

  /**
   * Returns the configuration object.
   * 
   * @public
   * @returns {Config} - The configuration object.
   */
  getConfig() {
    return this._config;
  }
}