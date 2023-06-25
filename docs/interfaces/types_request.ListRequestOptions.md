[d1f41b78a4cf49f9888a71b5fe729cdb](../README.md) / [Exports](../modules.md) / [types/request](../modules/types_request.md) / ListRequestOptions

# Interface: ListRequestOptions<T\>

[types/request](../modules/types_request.md).ListRequestOptions

This interface defines the options that can be used to request a list of items.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the items in the list. |

## Table of contents

### Properties

- [filter](types_request.ListRequestOptions.md#filter)
- [limit](types_request.ListRequestOptions.md#limit)
- [offset](types_request.ListRequestOptions.md#offset)
- [page](types_request.ListRequestOptions.md#page)
- [sort](types_request.ListRequestOptions.md#sort)

## Properties

### filter

• `Optional` **filter**: `Object`

The filters to apply to the results.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `equals?` | { [Q in string \| number \| symbol]?: string \| number \| RegExp \| string[] \| number[] } | The fields to filter by, and the values to filter for. |
| `excludes?` | { [Q in string \| number \| symbol]?: string \| number \| RegExp \| string[] \| number[] } | The fields to filter by, and the values to exclude from them. |
| `exists?` | keyof `T` | The fields to filter by, and the values that must exist in them. |
| `greaterThan?` | { [Q in string \| number \| symbol]?: number } | The fields to filter by, and the values that must be greater than the specified value. |
| `greaterThanOrEqualTo?` | { [Q in string \| number \| symbol]?: number } | The fields to filter by, and the values that must be greater than or equal to the specified value. |
| `includes?` | { [Q in string \| number \| symbol]?: string \| number \| RegExp \| string[] \| number[] } | The fields to filter by, and the values to search for within them. |
| `lessThan?` | { [Q in string \| number \| symbol]?: number } | The fields to filter by, and the values that must be less than the specified value. |
| `lessThanOrEqualTo?` | { [Q in string \| number \| symbol]?: number } | The fields to filter by, and the values that must be less than or equal to the specified value. |
| `notEquals?` | { [Q in string \| number \| symbol]?: string \| number \| RegExp \| string[] \| number[] } | The fields to filter by, and the values to exclude. |
| `notExists?` | keyof `T` | The fields to filter by, and the values that must not exist in them. |

#### Defined in

[src/types/request.ts:49](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/request.ts#L49)

___

### limit

• `Optional` **limit**: `number`

The maximum number of items to return in a single page of results.

#### Defined in

[src/types/request.ts:26](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/request.ts#L26)

___

### offset

• `Optional` **offset**: `number`

The number of items to skip before starting to return results.

#### Defined in

[src/types/request.ts:36](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/request.ts#L36)

___

### page

• `Optional` **page**: `number`

The page number of the results to return.

#### Defined in

[src/types/request.ts:31](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/request.ts#L31)

___

### sort

• `Optional` **sort**: `Object`

The field to sort the results by, and the direction to sort in.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `by` | ``"asc"`` \| ``"desc"`` |
| `on` | `Exclude`<keyof `T`, ``"_id"``\> |

#### Defined in

[src/types/request.ts:41](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/90d5095/src/types/request.ts#L41)
