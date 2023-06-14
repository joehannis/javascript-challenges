const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.basket = [];
    this.discount = 0;
  }
  getTotalPrice() {
    if (this.basket === 0) {
      return 0;
    } else {
      let total = 0;
      this.basket.forEach((item) => {
        total += item.price;
      });
      return total - this.discount;
    }
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  addItem(candy) {
    this.basket.push(candy);
  }
}

module.exports = ShoppingBasket;
