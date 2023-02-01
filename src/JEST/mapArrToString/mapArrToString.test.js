const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
    test("Correct value", () => {
        expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]); // toEqual compares the value of the objects
    });
    test("Different data types", () => {
        expect(mapArrToString([1, "2", 3, undefined, 4, null])).toEqual(["1", "3", "4"]);
    });
    test("Empty array", () => {
        expect(mapArrToString([])).toEqual([]);
    });
    test("Empty array", () => {
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4]);
    });
});