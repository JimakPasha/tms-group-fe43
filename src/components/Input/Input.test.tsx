import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input component", () => {

    test("renders input value correctly", () => {
        const handleChange = jest.fn();
        const value = "test value";
        render(<Input title="test" value={value} handleChange={handleChange} />);
        const input = screen.getByTestId("input");
        expect(input.getAttribute("value")).toBe(value);
    });
      
    test("calls handleChange when user types", () => {
        const handleChange = jest.fn();
        const value = "test value";
        render(<Input title="test" value={value} handleChange={handleChange} />);
        const input = screen.getByTestId("input");
        const newValue = "new test value";
        fireEvent.change(input, { target: { value: newValue } });
        expect(handleChange).toHaveBeenCalledWith(newValue);
    });

    test("displays error message if errorMessage is passed", () => {
        const errorMessage = "This is an error";
        render(<Input title="test" value="" handleChange={() => {}} errorMessage={errorMessage} />);
        const error = screen.getByText(errorMessage);
        expect(error).toBeInTheDocument();
      });
    
});