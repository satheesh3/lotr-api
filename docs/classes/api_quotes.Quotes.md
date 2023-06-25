[d1f41b78a4cf49f9888a71b5fe729cdb](../README.md) / [Exports](../modules.md) / [api/quotes](../modules/api_quotes.md) / Quotes

# Class: Quotes

[api/quotes](../modules/api_quotes.md).Quotes

## Hierarchy

- [`BaseApi`](api_api.BaseApi.md)

  ↳ **`Quotes`**

## Table of contents

### Constructors

- [constructor](api_quotes.Quotes.md#constructor)

### Properties

- [BASE\_PATH](api_quotes.Quotes.md#base_path)

### Methods

- [get](api_quotes.Quotes.md#get)
- [list](api_quotes.Quotes.md#list)
- [request](api_quotes.Quotes.md#request)

## Constructors

### constructor

• **new Quotes**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](../interfaces/types_client.Client.md) |

#### Overrides

[BaseApi](api_api.BaseApi.md).[constructor](api_api.BaseApi.md#constructor)

#### Defined in

[src/api/quotes/index.ts:11](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/quotes/index.ts#L11)

## Properties

### BASE\_PATH

▪ `Static` `Private` `Readonly` **BASE\_PATH**: ``"/quote"``

#### Defined in

[src/api/quotes/index.ts:9](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/quotes/index.ts#L9)

## Methods

### get

▸ **get**(`id`): `Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Quote`](../interfaces/types_quote.Quote.md)\>\>

Get a quote by ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the quote to retrieve. |

#### Returns

`Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Quote`](../interfaces/types_quote.Quote.md)\>\>

A Promise that resolves to a ListResponse object containing a single Quote object.

#### Defined in

[src/api/quotes/index.ts:36](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/quotes/index.ts#L36)

___

### list

▸ **list**(`options?`): `Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Quote`](../interfaces/types_quote.Quote.md)\>\>

List quotes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ListRequestOptions`](../interfaces/types_request.ListRequestOptions.md)<[`Quote`](../interfaces/types_quote.Quote.md)\> | An optional object containing query parameters to filter the results. |

#### Returns

`Promise`<[`ListResponse`](../interfaces/types_response.ListResponse.md)<[`Quote`](../interfaces/types_quote.Quote.md)\>\>

A Promise that resolves to a ListResponse object containing an array of Quote objects.

#### Defined in

[src/api/quotes/index.ts:21](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/quotes/index.ts#L21)

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
