// 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
function compareObjects(obj1, obj2) {
    // Validate objects
    if (obj1.constructor.name !== "Object" || obj2.constructor.name !== "Object") return "Please pass in objects"
    // Compare objects by turning them to string
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true
    // Return false if objects are not equal
    return false
}

// *****************************************************

// 2. Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) string that contains only the columns specified
function convertObjectToCSV(objArr, columns) {
    // Validate argument
    if (objArr.constructor.name !== "Array") return "Argmument must be array"

    let returnStr = ""

    // Loop through array of objects
    objArr.forEach(item => {
        for (let key in item) {
            // Check if key is in columns
            if (columns.includes(key)) {
                returnStr += `${key}, ${item[key]} \n`
            }
        }
    })

    return returnStr.substring(0, returnStr.length - 2)
}

// *****************************************************

// 3. Write a JavaScript program to extract out the values at the specified indexes from a specified array
function extractValuesAtIndex(arr, indexes) {
    // Validate arguments
    if (arr.constructor.name !== "Array" || indexes.constructor.name !== "Array") return "Arguments must be array"

    const returnArr = []

    indexes.forEach(i => {
        if (arr[i]) returnArr.push(arr[i])
    })

    return returnArr
}

// *****************************************************
