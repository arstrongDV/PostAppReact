// Check if a value is present
export const required = (value) => {
    if (value) return undefined;  // No error if value is present
    return 'Field is required';   // Return an error message instead of an alert
};

// Check if a value exceeds a maximum length
export const maxLengthCreator = (maxLength) => (value) => {
    // Ensure the value exists and is a string before checking its length
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`;  // Return an error message instead of an alert
    }
    return undefined;  // No error
};
