// Function to print odd-positioned alphabets
function printOddPositionedAlphabets() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Define the alphabet
    let oddAlphabets = ''; // Initialize an empty string to hold the result

    // Loop through the alphabet
    for (let i = 0; i < alphabet.length; i++) {
        // Check if the position (i + 1) is odd
        if ((i + 1) % 2 !== 0) {
            oddAlphabets += alphabet[i]; // Append the letter to the result
        }
    }

    // Print the result
    console.log("Odd-positioned alphabets are:", oddAlphabets);
}

// Call the function to print the odd-positioned alphabets
printOddPositionedAlphabets();