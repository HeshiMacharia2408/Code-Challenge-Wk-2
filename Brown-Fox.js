function swapCase(str) {
    return str
    // Separates the arrays from the string for different character cases to be used  
    .split('') 
      .map(char => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      // Joins back the array to the string
      .join(''); 
  }
  
  // Using the function to swap cases
  const inputString = 'The Quick Brown Fox';
  const outputString = swapCase(inputString);
  console.log(outputString);