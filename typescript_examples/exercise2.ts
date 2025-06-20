
function calculateTotalPrice(price: number, quantity: number): number {
    return price * quantity;
}

function greetUser(name: string): string {
    return `Hello, ${name}! Welcome.`;
}

console.log(calculateTotalPrice(100, 5));
console.log(greetUser("Alice"));

