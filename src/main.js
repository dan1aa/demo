/**
 * Users list
 * @type {Map<String, Object>}
 */
 const users = new Map();
 users.set("1", { firstName: "Alice", earnings: 4000 });
 users.set("2", { firstName: "Madison", earning: 0 });
 users.set("3", { firstName: "Zaya", earnings: 12000 });
 users.set("4", { firstName: "Brendon", earning: -1 });
 users.set("5", { firstName: "Ted", donations : 15500 });
 users.set("6", { firstName: "Brian" });
 users.set("7", { firstName: "Zelda", earning: 20000 });
 users.set("8", { firstName: "Brian", earning: null});
 users.set("9", { firstName: "Brian", earning: 2000, earnings: 0});
 users.set("10", { firstName: "Ted", earning: undefined});

/**
 * User information
 * @type {Array}
 */
let userInfo = Array.from(users.values())

/**
 * @function makeArray
 * @returns {Array}
 */
let makeArray = function() {
    let allEarn = []
    for(let i = 0; i < userInfo.length; i++) {
      let earning = userInfo[i]?.earning
      let earnings = userInfo[i]?.earnings
      allEarn.push(earning, earnings)
    }
    return allEarn;
}

/**
 * @function calcSalary
 * @returns {string} - Total salary of users with a dollar sign
 */
 let calcSalary = function(arr) {
  let filteredEarn = arr.filter(elem => (typeof elem === 'number'))
  let sum = filteredEarn.reduce((a, b) => a + b, 0)
  return `The sum is ${sum}`
}
console.log(calcSalary(makeArray(userInfo)));