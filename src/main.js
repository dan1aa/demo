/**
 * Users list
 * @type {Map<String, Object>}
 */
const users = new Map();
users.set("1", { firstName: "Alice", earning: 4000 });
users.set("2", { firstName: "Madison", earning: 0 });
users.set("3", { firstName: "Zaya", earning: 12000 });
users.set("4", { firstName: "Brendon", earning: 3400 });
users.set("5", { firstName: "Ted", earning: 15500 });
users.set("6", { firstName: "Brian", earning: 2000 });

/**
 * @function calcSalary
 * @description Calculate users salary
 * @returns {string} - Total salary of users with a dollar sign
 */
let calcSalary = function() {
  let sum = 0;
  for (let [_, value] of users) {
    sum += value.earning;
  }
  return `The salary of the all users is: ${sum}`
}
console.log(calcSalary());