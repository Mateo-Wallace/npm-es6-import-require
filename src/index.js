// Your code here
export const myFunction = () => {
  console.log("Hello, world!");
};

// For CommonJS compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = { myFunction };
}
