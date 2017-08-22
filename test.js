'use strict'
function main(arr1, arr2){
    var res = [];
    res = arr1.filter((elem) => {
        return arr2.includes(elem);
    });
    return res.concat();
}
var arr1 = [1,2,2,1], arr2 = [2,2];
console.log("Array: \n"+ arr1+ '\n' + arr2
    + '\nResult: ' +main(arr1, arr2));