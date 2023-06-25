[d1f41b78a4cf49f9888a71b5fe729cdb](../README.md) / [Exports](../modules.md) / [types/response](../modules/types_response.md) / ListResponse

# Interface: ListResponse<T\>

[types/response](../modules/types_response.md).ListResponse

Represents a list of responses for a given type.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the response. |

## Table of contents

### Properties

- [docs](types_response.ListResponse.md#docs)
- [limit](types_response.ListResponse.md#limit)
- [offset](types_response.ListResponse.md#offset)
- [page](types_response.ListResponse.md#page)
- [total](types_response.ListResponse.md#total)

## Properties

### docs

• **docs**: `T`[]

An array of objects of type T.

#### Defined in

[src/types/response.ts:10](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/response.ts#L10)

___

### limit

• **limit**: `number`

The maximum number of objects of type T that can be returned in the response.

#### Defined in

[src/types/response.ts:18](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/response.ts#L18)

___

### offset

• **offset**: `number`

The offset of the results.

#### Defined in

[src/types/response.ts:26](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/response.ts#L26)

___

### page

• **page**: `number`

The page number of the current page in the response.

#### Defined in

[src/types/response.ts:22](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/response.ts#L22)

___

### total

• **total**: `number`

The total number of objects of type T in the response.

#### Defined in

[src/types/response.ts:14](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/response.ts#L14)
