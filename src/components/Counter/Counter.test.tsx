import { render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Counter from "./Counter";

const mockTimer = jest.fn();

jest.mock("../../hooks/useTimer", () => () => ({
  timer: mockTimer,
}));

describe("Given a counter component", () => {
  describe("When instantiated", () => {
    test("Then it should call a timer custom hook with a setter action", async () => {
      render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
      await waitFor(() => {
        expect(mockTimer).toHaveBeenCalled();
      });
    });
  });
});
