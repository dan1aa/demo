import {calcSalary} from "../modules/calcSalary.js"

console.log(calcSalary([1,2,3,4,5,6,7,8,9,10]));
console.log(calcSalary([1]));
console.log(calcSalary([9,8,4,3,10]));
console.log(calcSalary([1,1,1]));
console.log(calcSalary('string'));
console.log(calcSalary([2,3,3,3,4,5, 10]));
console.log(calcSalary([1,1,1,2,3,4,5,6,7,8,9]));
console.log(calcSalary([]));
console.log(calcSalary([9,9,9,9]));
console.log(calcSalary([1,2,3,55]));
console.log(calcSalary([1,2,3,5]));
console.log(calcSalary([,,,]));
console.log(calcSalary([1,2,3,4,6,7,7]));
console.log(calcSalary([1,2,null,5,7]));
console.log(calcSalary([NaN]));

/**
 * testValues
 * @description - function that doing tests
 * @returns {string} - are tests passed or failed
 */

function testValues() {
    if(calcSalary([1,2,3,4,5,6,7,8,9]) === 37999
    && calcSalary([1]) === 4000 
    && calcSalary([9,8,4,3]) === 13999 
    && calcSalary([1,1,1]) === 12000
    && calcSalary('string') === 'Ooops! Maybe your data is empty or not an array!'
    && calcSalary([2,3,3,3,4,5]) === 35999
    && calcSalary([1,1,1,2,3,4,5,6,7,8,9]) === 45999
    && calcSalary([]) === 'Ooops! Maybe your data is empty or not an array!'
    && calcSalary([9,9,9,9]) === 8000
    && calcSalary([1,2,3,55]) === 'Calculate Error'
    && calcSalary([1,2,3,5]) === 16000
    && calcSalary([,,,]) === 'Calculate Error'
    && calcSalary([1,2,3,4,6,7,7]) === 55999
    && calcSalary([1,2,null,5,7]) === 'Calculate Error'
    && calcSalary([NaN]) === 'Calculate Error'){
        return 'Test passed'
    }
    else {
        return 'test failed'
    }
}

console.log(testValues());



