const delay = require("./delay");

describe("delay", () => {
    test("Correct value", async () => {
        const sum = await delay(() => 10 + 10, 1000);
        expect(sum).toBe(20);
    })
})