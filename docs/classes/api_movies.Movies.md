[d1f41b78a4cf49f9888a71b5fe729cdb](../README.md) / [Exports](../modules.md) / [api/movies](../modules/api_movies.md) / Movies

# Class: Movies

[api/movies](../modules/api_movies.md).Movies

Class representing the Movies API.

## Hierarchy

- [`BaseApi`](api_api.BaseApi.md)

  ↳ **`Movies`**

## Table of contents

### Constructors

- [constructor](api_movies.Movies.md#constructor)

### Properties

- [BASE\_PATH](api_movies.Movies.md#base_path)

### Methods

- [get](api_movies.Movies.md#get)
- [list](api_movies.Movies.md#list)
- [quotes](api_movies.Movies.md#quotes)
- [request](api_movies.Movies.md#request)

## Constructors

### constructor

• **new Movies**(`client`)

Create a new instance of the Movies API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](../interfaces/types_client.Client.md) | The HTTP client to be used for making requests. |

#### Overrides

[BaseApi](api_api.BaseApi.md).[constructor](api_api.BaseApi.md#constructor)

#### Defined in

[src/api/movies/index.ts:25](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/movies/index.ts#L25)

## Properties

### BASE\_PATH

▪ `Static` `Private` `Readonly` **BASE\_PATH**: ``"/movie"``

The base path for the Movies API.

#### Defined in

[src/api/movies/index.ts:19](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/movies/index.ts#L19)

## Methods

### get

▸ **get**(`id`): `Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Movie`](../interfaces/types_movie.Movie.md)\>\>

Get a movie by ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the movie to be retrieved. |

#### Returns

`Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Movie`](../interfaces/types_movie.Movie.md)\>\>

A promise that resolves to the requested movie.

#### Defined in

[src/api/movies/index.ts:48](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/movies/index.ts#L48)

___

### list

▸ **list**(`options?`): `Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Movie`](../interfaces/types_movie.Movie.md)\>\>

Get a list of movies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ListRequestOptions`](../interfaces/types_request.ListRequestOptions.md)<[`Movie`](../interfaces/types_movie.Movie.md)\> | The options to be used for the request. |

#### Returns

`Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Movie`](../interfaces/types_movie.Movie.md)\>\>

A promise that resolves to a list of movies.

#### Defined in

[src/api/movies/index.ts:34](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/movies/index.ts#L34)

___

### quotes

▸ **quotes**(`id`): `Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Quote`](../interfaces/types_quote.Quote.md)\>\>

Get a list of quotes for a movie.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the movie for which to retrieve quotes. |

#### Returns

`Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Quote`](../interfaces/types_quote.Quote.md)\>\>

A promise that resolves to a list of quotes for the specified movie.

#### Defined in

[src/api/movies/index.ts:60](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/movies/index.ts#L60)

___

### request

▸ `Protected` **request**<`T`\>(`req`): `Promise`<`T`\>

Sends an HTTP request to the REST API.

**`Throws`**

- If the request fails, an ApiError is thrown with the HTTP status code and error message.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the response data. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | [`ClientRequest`](../interfaces/api_api.ClientRequest.md) | An object containing the request URL, method, and any other options. |

#### Returns

`Promise`<`T`\>

- A Promise that resolves with the response data.

#### Inherited from

[BaseApi](api_api.BaseApi.md).[request](api_api.BaseApi.md#request)

#### Defined in

[src/api/api.ts:40](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/api.ts#L40)
