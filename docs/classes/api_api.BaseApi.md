[d1f41b78a4cf49f9888a71b5fe729cdb](../README.md) / [Exports](../modules.md) / [api/api](../modules/api_api.md) / BaseApi

# Class: BaseApi

[api/api](../modules/api_api.md).BaseApi

## Hierarchy

- **`BaseApi`**

  ↳ [`Movies`](api_movies.Movies.md)

  ↳ [`Quotes`](api_quotes.Quotes.md)

## Table of contents

### Constructors

- [constructor](api_api.BaseApi.md#constructor)

### Properties

- [config](api_api.BaseApi.md#config)

### Methods

- [request](api_api.BaseApi.md#request)

## Constructors

### constructor

• **new BaseApi**(`client`)

Creates an instance of BaseApi.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`Client`](../interfaces/types_client.Client.md) | An instance of the Client class. |

#### Defined in

[src/api/api.ts:29](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/api.ts#L29)

## Properties

### config

• `Private` **config**: [`Config`](../interfaces/types_client.Config.md)

#### Defined in

[src/api/api.ts:23](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/api.ts#L23)

## Methods

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

#### Defined in

[src/api/api.ts:40](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/api.ts#L40)
