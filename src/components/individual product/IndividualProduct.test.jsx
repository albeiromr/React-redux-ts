import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndividualProduct from "./IndividualProduct";

beforeEach(() => {
    render(<IndividualProduct />);
})

test("product name is visible for the users", () => {
    const productName = screen.getByText("El nombre del producto");
    expect(productName).toBeVisible();
    expect(productName).toBeInTheDocument();
})

test("product price is visible", () => {
    const productPrice = screen.getByText("$ 67.800");
    expect(productPrice).toBeVisible();
    expect(productPrice).toBeInTheDocument();
})

test("product quantity is visible", () => {
    const productQuantity = screen.getByText("23");
    expect(productQuantity).toBeVisible();
    expect(productQuantity).toBeInTheDocument();
})