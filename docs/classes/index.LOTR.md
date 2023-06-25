[d1f41b78a4cf49f9888a71b5fe729cdb](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / LOTR

# Class: LOTR

[index](../modules/index.md).LOTR

Lord of the Rings client for Node.js.

**`Implements`**

Client

## Implements

- [`Client`](../interfaces/types_client.Client.md)

## Table of contents

### Constructors

- [constructor](index.LOTR.md#constructor)

### Properties

- [\_config](index.LOTR.md#_config)
- [movies](index.LOTR.md#movies)
- [quotes](index.LOTR.md#quotes)

### Methods

- [getConfig](index.LOTR.md#getconfig)

## Constructors

### constructor

• **new LOTR**(`props`)

Creates an instance of LOTR.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`Config`](../interfaces/types_client.Config.md) | The configuration object containing the access token. |

#### Defined in

[src/index.ts:43](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/index.ts#L43)

## Properties

### \_config

• `Private` **\_config**: [`Config`](../interfaces/types_client.Config.md)

The configuration for the client.

#### Defined in

[src/index.ts:19](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/index.ts#L19)

___

### movies

• **movies**: [`Movies`](api_movies.Movies.md)

The Movies API.

#### Defined in

[src/index.ts:35](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/index.ts#L35)

___

### quotes

• **quotes**: [`Quotes`](api_quotes.Quotes.md)

The Quotes API.

#### Defined in

[src/index.ts:27](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/index.ts#L27)

## Methods

### getConfig

▸ **getConfig**(): [`Config`](../interfaces/types_client.Config.md)

Returns the configuration object.

#### Returns

[`Config`](../interfaces/types_client.Config.md)

- The configuration object.

#### Implementation of

[Client](../interfaces/types_client.Client.md).[getConfig](../interfaces/types_client.Client.md#getconfig)

#### Defined in

[src/index.ts:58](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/index.ts#L58)
