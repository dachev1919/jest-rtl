import { render } from "@testing-library/react";
import Example1 from "./Example1";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("TEST ROUTES", () => {
    test("Router test", () => {
        // MemoryRouter при умові, якщо в компоненті відсутній BrowserRouter
        render(
            <MemoryRouter>
                <Example1/>
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId("main-link");
        const aboutLink = screen.getByTestId("about-link");
        userEvent.click(aboutLink);
        expect(screen.getByTestId("about-page")).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId("main-page")).toBeInTheDocument();
    });

    test("Router test", () => {
        // MemoryRouter при умові, якщо в компоненті відсутній BrowserRouter
        render(
            <MemoryRouter initialEntries={['/asdasd']}>
                <Example1/>
            </MemoryRouter>
        );
        expect(screen.getByTestId("error-page")).toBeInTheDocument();
    });
})