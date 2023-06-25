/**
 * A Quote interface that defines the structure of a quote object.
 * 
 * @interface Quote
 * @property {string} _id - The unique identifier of the quote.
 * @property {string} dialog - The text of the quote.
 * @property {string} movie - The name of the movie the quote is from.
 * @property {string} character - The name of the character who said the quote.
 * @property {string} id - The identifier of the quote.
 */
export interface Quote {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
    id: string;
}