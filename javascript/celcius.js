function convertCelsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number' || isNaN(celsius)) {
        throw new Error('Invalid input. Please enter a valid number for the temperature in Celsius.');
    }

    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Example usage:
try {
    const temperatureCelsius = 28;
    const temperatureFahrenheit = convertCelsiusToFahrenheit(temperatureCelsius);
    console.log(`${temperatureCelsius} degrees Celsius is equal to ${temperatureFahrenheit} degrees Fahrenheit.`);
} catch (error) {
    console.error(error.message);
}
