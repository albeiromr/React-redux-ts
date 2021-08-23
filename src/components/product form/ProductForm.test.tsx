import { render,screen,  } from "@testing-library/react";
import ProductForm from "./ProductForm";
import userEvent from '@testing-library/user-event';

beforeEach(() => {
    render(<ProductForm />);
})

test("title is visible for the user", () => {
    const title = screen.getByText("Agrega un producto");
    expect(title).toBeVisible();
})

test("submit button is visible", () => {
    const button = screen.getByText("Agregar al carrito");
    expect(button).toBeVisible();
})

test("inputs values change when users write on them", () => {
    const nameInput = screen.getByLabelText("Nombre");
    userEvent.type(nameInput, "this is the product name");
    expect(nameInput).toHaveDisplayValue("this is the product name");
    const priceInput = screen.getByLabelText("Precio");
    userEvent.type(priceInput, "this is the product price");
    expect(priceInput).toHaveDisplayValue("this is the product price");
    const quantityInput = screen.getByLabelText("Cantidad");
    userEvent.type(quantityInput, "this is the product quantity");
    expect(quantityInput).toHaveDisplayValue("this is the product quantity");
})

test("product form is reset when pressing submit button", () => {
    const nameInput = screen.getByLabelText("Nombre");
    userEvent.type(nameInput, "this is the product name");
    expect(nameInput).toHaveDisplayValue("this is the product name");
    const priceInput = screen.getByLabelText("Precio");
    userEvent.type(priceInput, "this is the product price");
    expect(priceInput).toHaveDisplayValue("this is the product price");
    const quantityInput = screen.getByLabelText("Cantidad");
    userEvent.type(quantityInput, "this is the product quantity");
    expect(quantityInput).toHaveDisplayValue("this is the product quantity");
    // pressing submit button
    const submitButton = screen.getByText("Agregar al carrito");
    userEvent.click(submitButton);
    expect(nameInput).toHaveDisplayValue("");
    expect(priceInput).toHaveDisplayValue("");
    expect(quantityInput).toHaveDisplayValue("");
    
})