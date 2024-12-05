//write a java script program take 100 natural numbers as an input if a number is a multiple of 2,multiply the givrn number by 5 and if a number is a multiple by 3 divide by 3 and give the result of the repeated number after both the operation
// Function to process the numbers
function processNumbers(numbers) {
    const results = [];

    numbers.forEach(number => {
        let result = number;

        // Check if the number is a multiple of 2
        if (number % 2 === 0) {
            result *= 5; // Multiply by 5
        }

        // Check if the number is a multiple of 3
        if (number % 3 === 0) {
            result /= 3; // Divide by 3
        }

        // Store the result
        results.push(result);
    });

    return results;
}

// Example usage
const inputNumbers = [];

// Generate 100 natural numbers (1 to 100)
for (let i = 1; i <= 100; i++) {
    inputNumbers.push(i);
}

// Process the numbers and get results
const processedResults = processNumbers(inputNumbers);

// Display the results
console.log("Processed Results:");
processedResults.forEach((result, index) => {
    console.log(`Original Number: ${inputNumbers[index]}, Processed Result: ${result}`);
});