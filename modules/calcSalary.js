import usersList from "./usersList.js";
/**
 * calcSalary
 * @param {array} id
 * @returns {number} - salary of users
 */

let calcSalary = function (usersId) {
    if (!(usersId instanceof Array) || !usersId.length) {
        return new Error('Ooops! Maybe your data is empty or not an array!')
    }
    else {
        let sum = 0;
        try {
            for(let i = 0; i < usersId.length; i++) {
                let currentUser = usersList[usersId[i]]
                currentUser.earning = currentUser.earning === undefined ? 0 : currentUser.earning
                currentUser.earnings = currentUser.earnings === undefined ? 0 : currentUser.earnings
                sum += currentUser.earning + currentUser.earnings
            }
        }
        catch {
            return new Error('Calculate error!')
        }
        return sum;
    }
}
export default calcSalary;