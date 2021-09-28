/**
 * Users list
 * @type {Map<string, object>}
 * @param {String} - name
 * @param {String} - id
 * @param {Number} - earning
 * @param {Number} - earnings
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

 let usersList = Object.fromEntries(users)


 export default usersList;