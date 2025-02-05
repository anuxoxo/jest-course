function sum(a, b) {
  return a + b;
}

function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid input");
  }
}

function fetchData(callback) {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("peanut butter"), 1000);
  });
}

module.exports = { sum, myFunction, fetchData, fetchPromise };
