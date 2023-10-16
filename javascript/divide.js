const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function divideNumbers() {
    rl.question('Enter the numerator: ', (numerator) => {
        rl.question('Enter the denominator: ', (denominator) => {
            numerator = parseFloat(numerator);
            denominator = parseFloat(denominator);

            if (isNaN(numerator) || isNaN(denominator)) {
                console.log('Please enter valid numbers.');
                rl.close();
                return;
            }

            try {
                if (denominator === 0) {
                    throw new Error('Division by zero is not allowed.');
                } else {
                    const result = numerator / denominator;
                    console.log('Result: ' + result);
                }
            } catch (error) {
                console.error(error.message);
            }
            rl.close();
        });
    });
}

// Call the function
divideNumbers();
