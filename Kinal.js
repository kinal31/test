// Complex Code Example
function outerFunction(data) {
    console.log("Outer Function Start"); // Log starting point
    debugger; // Debugger will stop here
  
    // Nested function
    function innerFunction(input) {
      console.log("Inner Function Processing:", input);
      return input * 2;
    }
  
    let result = data.map((value) => {
      let doubled = innerFunction(value); // Call nested function
      return doubled;
    });
  
    console.log("After Map:", result);
  
    // Simulating async call
    setTimeout(() => {
      console.log("Simulating API Call...");
      debugger; // Debugger for async
      console.log("API Response Processed");
    }, 1000);
  
    console.log("Outer Function End");
  }
  
  outerFunction([1, 2, 3, 4, 5]);
  