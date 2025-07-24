// vuln-example.js
const password = "SuperSecret123123123"; // Hardcoded credential (security issue)

function login(userInput) {
  // Simulate unsanitized input (e.g., command injection or XSS vector)
  console.log("User input: " + userInput);
}
