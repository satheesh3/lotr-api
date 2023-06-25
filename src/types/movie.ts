/**
 * Interface for a movie object.
 * 
 * @interface Quote
 * @property {string} _id - Unique identifier for the movie.
 * @property {string} name - Name of the movie.
 * @property {string} runtimeInMinutes - Duration of the movie in minutes.
 * @property {string} budgetInMillions - Budget of the movie in millions of dollars.
 * @property {string} boxOfficeRevenueInMillions - Box office revenue of the movie in millions of dollars.
 * @property {string} academyAwardNominations - Number of Academy Award nominations received by the movie.
 * @property {string} academyAwardWins -  Number of Academy Awards won by the movie.
 * @property {string} rottenTomatoesScore - Rotten Tomatoes score of the movie.
 */
export interface Movie {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
}