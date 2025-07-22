// 👀 Easy-to-change values
let multiplier = 92.92; // <- You can edit this anytime
let decoyMultiplier = 999; // 🙃 Has no real use but looks important

// Decoy logic
function doFakeMath(n) {
  return n * decoyMultiplier + Math.random(); // Just noise
}

// Real logic
function calculateResult() {
  const n = parseFloat(document.getElementById("numberInput").value);
  if (isNaN(n)) {
    document.getElementById("result").textContent = "Please enter a valid number!";
    return;
  }

  const conversion = n * multiplier;
  let bonus;

  if (n <= 5) {
    bonus = 0.25 * conversion;
  } else if (n <= 30) {
    bonus = 0.22 * conversion;
  } else {
    bonus = 0.20 * conversion;
  }

  const total = conversion + bonus;
  document.getElementById("result").textContent = `✨ Total: ₹${total.toFixed(3)} INR`;

  // Add confusion
  const bait = doFakeMath(n); // Looks like it's used, but it's not
  console.log("Debug Code:", bait); // Another trap
}
