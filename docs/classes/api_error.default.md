[d1f41b78a4cf49f9888a71b5fe729cdb](../README.md) / [Exports](../modules.md) / [api/error](../modules/api_error.md) / default

# Class: default

[api/error](../modules/api_error.md).default

Represents an API error with a specific status code, message, and error type.

## Hierarchy

- `Error`

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](api_error.default.md#constructor)

### Properties

- [cause](api_error.default.md#cause)
- [message](api_error.default.md#message)
- [name](api_error.default.md#name)
- [stack](api_error.default.md#stack)
- [statusCode](api_error.default.md#statuscode)
- [type](api_error.default.md#type)
- [prepareStackTrace](api_error.default.md#preparestacktrace)
- [stackTraceLimit](api_error.default.md#stacktracelimit)

### Methods

- [getErrorMessage](api_error.default.md#geterrormessage)
- [getErrorType](api_error.default.md#geterrortype)
- [captureStackTrace](api_error.default.md#capturestacktrace)

## Constructors

### constructor

• **new default**(`statusCode`, `message?`)

Creates a new instance of the ApiError class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statusCode` | `number` | The HTTP status code of the error. |
| `message?` | `string` | The error message to display. Optional. |

#### Overrides

Error.constructor

#### Defined in

[src/api/error.ts:14](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/error.ts#L14)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• `Readonly` **message**: `string`

#### Overrides

Error.message

#### Defined in

[src/api/error.ts:5](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/error.ts#L5)

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### statusCode

• `Readonly` **statusCode**: `number`

#### Defined in

[src/api/error.ts:7](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/error.ts#L7)

___

### type

• `Readonly` **type**: `string`

#### Defined in

[src/api/error.ts:6](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/error.ts#L6)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### getErrorMessage

▸ `Private` **getErrorMessage**(`statusCode`): `string`

Returns the error message based on the HTTP status code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statusCode` | `number` | The HTTP status code of the error. |

#### Returns

`string`

The error message corresponding to the HTTP status code.

#### Defined in

[src/api/error.ts:26](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/error.ts#L26)

___

### getErrorType

▸ `Private` **getErrorType**(`statusCode`): `string`

Returns the error type based on the HTTP status code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `statusCode` | `number` | The HTTP status code of the error. |

#### Returns

`string`

The error type corresponding to the HTTP status code.

#### Defined in

[src/api/error.ts:44](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/api/error.ts#L44)

___

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
