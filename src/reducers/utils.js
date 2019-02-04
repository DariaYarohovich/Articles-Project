import { OrderedMap } from 'immutable';

export function arrToMap(arr, ItemRecord) {
    return arr.reduce(
        (acc, arrItem) => acc.set(arrItem.id, ItemRecord ? new ItemRecord(arrItem) : arrItem),
        new OrderedMap()
    )
}