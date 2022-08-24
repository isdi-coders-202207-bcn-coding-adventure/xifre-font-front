import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { IKeyDate, keyDate } from "../data/keyDate";
import useTimer from "./useTimer";

jest.useFakeTimers();

describe("Given a timer function returned by a userTimer function", () => {
  describe("When called with a function as an argument", () => {
    test("It should call the passed function with a date with one second less", async () => {
      const counterDate = { ...keyDate };

      const expectedDate = {
        ...counterDate,
        second: counterDate.second - 1,
      };

      const {
        result: {
          current: { timer },
        },
      } = renderHook(useTimer);

      const mockSetter = jest.fn() as React.Dispatch<
        React.SetStateAction<IKeyDate>
      >;

      act(() => {
        timer(mockSetter);
      });

      jest.advanceTimersByTime(1000);

      await waitFor(() => {
        expect(mockSetter).toHaveBeenCalledWith(expectedDate);
      });
    });
  });
});
