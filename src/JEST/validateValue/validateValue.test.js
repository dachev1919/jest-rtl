const validateValue = require("./validateValue");

test("Value validation", () => {
    expect(validateValue(50)).toBe(true);
});

describe('validateValue', () => {
    test("Correct value", () => {
        expect(validateValue(50)).toBe(true);
    });
    test("Less than correct", () => {
        expect(validateValue(-1)).toBe(false);
    });
    test("More than correct", () => {
        expect(validateValue(101)).toBe(false);
    });
    test("Borderline from above", () => {
        expect(validateValue(0)).toBe(true);
    });
    test("Borderline from below", () => {
        expect(validateValue(100)).toBe(true);
    });
})