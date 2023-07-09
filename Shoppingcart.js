// Import necessary libraries or modules

// Define a class for the shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Add an item to the shopping cart
  addItem(item) {
    this.items.push(item);
  }

  // Remove an item from the shopping cart
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Calculate the total price of all items in the shopping cart
  calculateTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }

  // Process payment using card payment functionality
  processPayment(cardNumber, amount) {
    // Validate card number and amount
    if (typeof cardNumber !== 'string' || typeof amount !== 'number') {
      throw new Error('Invalid card number or amount');
    }

    // Perform card payment processing logic
    // ...

    // Return payment status
    return 'Payment processed successfully';
  }
}

// Create an instance of the shopping cart
const cart = new ShoppingCart();

// Usage example:
cart.addItem({ name: 'Item 1', price: 10 });
cart.addItem({ name: 'Item 2', price: 20 });
console.log('Total:', cart.calculateTotal());

try {
  const paymentStatus = cart.processPayment('1234567890', 30);
  console.log(paymentStatus);
} catch (error) {
  console.error('Error:', error.message);
}


// This looks good to me so far. Nice toght code. Keep up the good work 
