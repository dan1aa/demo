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
  let filteredEarn = arr.filter(Boolean)
  let sum = filteredEarn.reduce((a, b) => a + b, 0)
  return `The sum is ${sum}`
}
console.log(calcSalary(makeArray(userInfo)));
console.log(calcSalary([1,3,44,55,undefined, null, 55,77]));
console.log(calcSalary([1,3,44,55,null, false, 55,77]));
console.log(calcSalary([133,321,414,55,2323, true, 55,77]));
console.log(calcSalary([1,-2,3434,undefined,false, null, 67,100]));
console.log(calcSalary([1,-100,undefined,undefined, null, 3434,false]));

