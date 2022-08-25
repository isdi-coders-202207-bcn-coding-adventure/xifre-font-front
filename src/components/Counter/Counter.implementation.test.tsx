import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { fullKeyDate } from "../../data/keyDate";
import { store } from "../../store/store";
import Counter from "./Counter";

jest.useFakeTimers();

jest.mock("../../data/keyDate", () => ({
  ...jest.requireActual("../../data/keyDate"),
  keyDate: {
    day: 2,
    hour: 4,
    minute: 10,
    second: 9,
  },
  fullKeyDate: new Date(0, 0, 2, 4, 10, 9),
}));

describe("Given a counter component", () => {
  describe("When instantiated", () => {
    test("Then it should show a field for days, for hours, for minutes and for seconds", () => {
      render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );

      const field = [
        screen.getByText("days"),
        screen.getByText("hours"),
        screen.getByText("minutes"),
        screen.getByText("seconds"),
      ];

      field.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  test("Then it should display the date stored as keyDate", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const field = [
      screen.getByText(fullKeyDate.getDate()),
      screen.getByText(fullKeyDate.getHours()),
      screen.getByText(fullKeyDate.getMinutes()),
      screen.getByText(fullKeyDate.getSeconds()),
    ];

    field.forEach((element) => expect(element).toBeInTheDocument());
  });

  test("After 3 seconds, the second timer should show 3 seconds less", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    jest.advanceTimersByTime(3100);

    await waitFor(() => {
      screen.getByText(fullKeyDate.getSeconds() - 3);
    });
  });

  test("After 3 minutes, the minute timer should show 3 minutes less", async () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    jest.advanceTimersByTime(180000);

    await waitFor(() => {
      screen.getByText(fullKeyDate.getMinutes() - 3);
    });
  });
});
