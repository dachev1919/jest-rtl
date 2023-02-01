import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";

describe("Counter", () => {
    test("Test router", () => {
        const { getByTestId } = renderWithRouter(<Counter />, {
            counter: {
                value: 10
            }
        });
        const incrementButton = getByTestId("increment-button");
        expect(getByTestId("counter-value")).toHaveTextContent("10");
        userEvent.click(incrementButton);
        expect(getByTestId("counter-value")).toHaveTextContent("11");
    });
})