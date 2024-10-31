let age = prompt("Please enter your age:");

if (age < 5) {
  console.log("You are a toddler.");
} else if (age >= 5 && age <= 12) {
  console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
  console.log("You are a teenager.");
} else if (age >= 20 && age <= 35) {
  console.log("You are a young adult.");
} else if (age >= 36 && age <= 60) {
  console.log("You are middle-aged.");
} else {
  console.log("You are a senior.");
}
