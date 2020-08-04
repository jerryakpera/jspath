// MEDIUM CHALLENGES
// 1. Create a function which returns the number of true values there are in an array.
function returnTrueValues(arr) {
    // Validate argument
    if (arr.constructor.name !== "Array") return "Argument must be an array"

    return arr.filter(item => item === true).length
}

// ***************************

// 2. Create a function that counts the number of syllables a word has. Each syllable is separated with a dash 
function countSyllables(str) {
    // Validate argument string
    if (str.constructor.name !== "String") return "Argument must be a string"

    return str.split("-").length;
}

// ***************************