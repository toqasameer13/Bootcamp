class Stock {
  constructor(symbol, price) {
    this.symbol = symbol;
    this.price = price;
    this.investors = []; // List of observers
  }

  subscribe(investor) {
    this.investors.push(investor);
  }

  unsubscribe(investor) {
    this.investors = this.investors.filter(
      (subscriber) => subscriber !== investor
    );
  }

  notify() {
    this.investors.forEach((investor) =>
      investor.update(this.price, this.symbol)
    );
  }

  setPrice(newPrice) {
    if (this.price !== newPrice) {
      this.price = newPrice;
      this.notify();
    }
  }
}

class Investor {
  constructor(name) {
    this.name = name;
  }

  update(price, symbol) {
    console.log(
      `${this.name} has been notified that ${symbol} is now ${price}`
    );
  }
}

// example usage:
const appleStock = new Stock("AAPL", 150);

const investor1 = new Investor("John Doe");
const investor2 = new Investor("Jane Smith");

appleStock.subscribe(investor1);
appleStock.subscribe(investor2);

appleStock.setPrice(155);
appleStock.setPrice(160);

appleStock.unsubscribe(investor1);

appleStock.setPrice(165);
