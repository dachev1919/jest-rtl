const square = require("./square");

describe("square", () => {
    let mockValue;

    // перед кожним тестом
    beforeEach(() => {
        mockValue = Math.random();
    });

    // визоветься один раз перед всіма тестами
    beforeAll(() => {
        mockValue = Math.random();
    });

    test("Correct value", () => {
        expect(square(4)).toBe(16);

        // моки функції pow
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        // pow не визивався, так як в функції square до нього не дійшло
        expect(spyMathPow).toBeCalledTimes(0);
        square(2);
        // метод pow визвався один раз в функції square
        expect(spyMathPow).toBeCalledTimes(1);
        // якщо ми створимо мок в іншому тесті, то pow в ньому буде зберігати
        // 1 визов з цього тесту, тому за потребою очищуй моки після кожного тесту
    });
    test("Less than", () => {
        expect(square(4)).toBeLessThan(17);
    });
    test("Greater than", () => {
        expect(square(4)).toBeGreaterThan(15);
    });
    test("Not undefined", () => {
        expect(square(4)).not.toBeUndefined();
    });

    // після кожного тесту
    afterEach(() => {
        // for example: delete from DB
    });

    // після завершення всіх тестів
    beforeAll(() => {
        mockValue = Math.random();
    });
});
