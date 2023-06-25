[d1f41b78a4cf49f9888a71b5fe729cdb](../README.md) / [Exports](../modules.md) / utils/encodeOptions

# Module: utils/encodeOptions

## Table of contents

### Functions

- [default](utils_encodeOptions.md#default)

## Functions

### default

▸ **default**<`T`\>(`options?`): `string`

This function takes in a ListRequestOptions object and returns a string of query parameters
to be used in a URL for filtering and sorting data.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ListRequestOptions`](../interfaces/types_request.ListRequestOptions.md)<`T`\> | An object containing options for filtering and sorting data. |

#### Returns

`string`

A string of query parameters to be used in a URL.

#### Defined in

[src/utils/encodeOptions.ts:10](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/utils/encodeOptions.ts#L10)
