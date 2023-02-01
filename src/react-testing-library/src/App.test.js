import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
// import userEvent from "@testing-library/user-event";

describe("TEST APP", () => {
    test("renders learn react link", () => {
        render(<App/>);
        // типи селекторів: findBy|getBy|queryBy
        // findBy - намагається знайти один елемент, findAll - масив елементів | асинхронного
        // getBy - 100% повинен знайти один елемент, в зворотньому - помилка. getAll | 100% отримати елемент
        // queryBy - якщо елемент не отримаємо, повернеться null - тест виконався. Тобто, переконатися у відсутності |
        // довести що елемента нема
        const text = screen.getByText(/Text/i);
        const btn = screen.getByRole("button");
        const input = screen.getByPlaceholderText(/Text/i);
        expect(text).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(input).toMatchSnapshot();
        expect(input).toBeInTheDocument();
    });

    test("Async checking", async () => {
        render(<App/>);
        const text = await screen.findByText(/data/i);
        expect(text).toBeInTheDocument();
        expect(text).not.toHaveStyle({ color: "red" });
        screen.debug();
    });

    test("Click event", async () => {
        render(<App/>);
        const btn = screen.getByTestId("toggle-btn");
        expect(screen.queryByTestId("toggle-elem")).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId("toggle-elem")).toBeNull();
    });

    test("Input event", async () => {
        render(<App/>);
        const input = screen.getByTestId("toggle-input");
        expect(screen.queryByTestId("toggle-input")).toContainHTML("");
        // штучні події
        fireEvent.input(input, {
            target: { value: "123123" },
        });
        // Близько до користувача, оброблює події натиску клавиш і т д
        // userEvent.type(input, "123123");
        expect(screen.queryByTestId("toggle-input")).toContainHTML("123123");
    });
});
