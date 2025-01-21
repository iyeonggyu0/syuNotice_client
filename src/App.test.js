import React from "react"; // React import 추가
import { render, screen } from "@testing-library/react";
import App from "./App"; // default import

// react-router mock 처리
// jest.mock("react-router", () => ({
//   useLocation: jest.fn().mockReturnValue({ pathname: "/" }),
//   useNavigate: jest.fn(),
// }));

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/SYU/i);
  expect(linkElement).toBeInTheDocument();
});
