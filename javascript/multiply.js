function generateMultiplicationTable(number) {
    // Check if the input is a positive integer
    if (number < 1 || !Number.isInteger(number)) {
        console.log("Please enter a positive integer.");
        return;
    }

    // Generate the multiplication table
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

// Example usage: Generate multiplication table for the number 5
generateMultiplicationTable(5);
