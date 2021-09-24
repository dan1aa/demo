import usersList from "./usersList.js"
/**
 * calcSalary
 * @description function that calculate salary of users
 * @param {Array} id - id of users
 * @returns {number}
 */
 let calcSalary = function (id) {
    let sum = 0;
    try {
        for(let i = 0; i < id.length; i++) {
            let currentUser = usersList[id[i]]
            currentUser.earning = currentUser.earning === undefined ? 0 : currentUser.earning
            currentUser.earnings = currentUser.earnings === undefined ? 0 : currentUser.earnings
            sum += currentUser.earning + currentUser.earnings
        }
    }
    catch {
        throw new Error("Calculate error! Enter a valid id of users")
    }
    return sum;
}

export default calcSalary;