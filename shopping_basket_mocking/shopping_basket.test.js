const ShoppingBasket = require("./shopping_basket");

describe("Shopping Basket", () => {
  it("Add items to basket", () => {
    const candyDouble = { name: "Mars", price: 4.99 };
    basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    expect(basket.basket).toContain(candyDouble);
  });
  it("gets total price", () => {
    const candyDouble = { name: "Mars", price: 4.99 };
    basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(9.98);
  });
  it("gets total price and applies discount", () => {
    const candyDouble = { name: "Mars", price: 4.99 };
    basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    basket.applyDiscount(5);
    expect(basket.getTotalPrice()).toEqual(4.98);
  });
});
