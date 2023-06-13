const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }
  getTotalPrice() {
    if (this.basket === 0) {
      return 0;
    } else {
      let total = 0;
      this.basket.forEach((item) => {
        total += item.price;
      });
      return total;
    }
  }

  addItem(candy) {
    this.basket.push(candy);
  }
}
