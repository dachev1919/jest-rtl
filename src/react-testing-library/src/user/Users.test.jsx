import { render, screen } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";

jest.mock("axios");

describe("USERS TEST", () => {
    let response;

    beforeEach(() => {
        response = {
            data: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                },
                {
                    "id": 2,
                    "name": "Oleh Dachev",
                },
            ]
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
    })

    test("renders learn react link", async () => {
        axios.get.mockReturnValue(response);
        render(<Users />);
        const users = await screen.findByTestId("user-item");
        expect(users.length).toBe(2);
        expect(axios.get).toBeCalledTimes(1);
        screen.debug();
    });

    test("test redirect to details page", async () => {
        axios.get.mockReturnValue(response);
        renderWithRouter(<Users/>);
        const users = await screen.findByTestId("user-item");
        userEvent.click(users[0]);
        expect(users.length).toBe(2);
        expect(screen.getByTestId("user-page")).toBeInTheDocument();
        screen.debug();
    });

});
