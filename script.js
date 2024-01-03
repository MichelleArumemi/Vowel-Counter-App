// Add an event listener to the button element with the ID "button"
document.getElementById("button").addEventListener("click", checkVowel);

// Define the function to check for vowels in the input
function checkVowel() {
    // Get the user input from the textbox and convert it to lowercase for case-insensitive comparison
    const userInput = document.getElementById("textbox").value.toLowerCase();
    
    // Initialize a variable to count the number of vowels
    let vowelCount = 0;
    
    // Define an array containing vowels
    const vowels = ["a", "e", "i", "o", "u"];

    // Iterate through each character in the user input
    for (let i = 0; i < userInput.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(userInput[i])) {
            // Increment the vowel count
            vowelCount++;
        }
    }

    // Display the result based on the vowel count
    if (vowelCount > 0) {
        document.write("This sentence has " + vowelCount + " vowel(s) in it");
    } else {
        document.write("This sentence does not have any vowels in it");
    }

    // Reload the page after displaying the result (after a 1000ms or 1-second delay)
    setTimeout(function () {
        location.reload();
    }, 1000);
}