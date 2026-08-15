function maskEmail(email) {
  // Get the position of the symbol that separates username from domain
  let atIndex = email.indexOf("@");

  // Separate username and domain
  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex);

  // Remove the "@" from the 'middle part' to hide
  let middlePart = username.slice(1, username.length -1);

  // Replace the middle part value with the "*"

  let maskedPart = "*".repeat(middlePart.length);

  // Now replace the real value with the new hidden value
  let maskedUsername = username.replace(middlePart, maskedPart);

  // Return
  return maskedUsername + domain;
}

let email = "apple.pie@example.com";
console.log(maskEmail("apple.pie@example.com"));
// Log the email argument
console.log(maskEmail(email));