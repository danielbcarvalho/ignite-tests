import { render, screen, fireEvent } from "@testing-library/react-native";
import { Input } from ".";

describe("Component: Input", () => {
  it("should render without activity indicator if isLoading prop is undefined", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("input-activity-indicator");

    expect(activityIndicator).toBeNull();
  });

  it("should render with activity indicator if isLoading prop is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("input-activity-indicator");

    expect(activityIndicator).toBeTruthy();
  });
});
