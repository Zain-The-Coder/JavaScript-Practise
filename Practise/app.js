// let arr = [32 ,432, 33];
// arr.forEach((array , value , index) => {
//     console.log(array , value , index)
// })
// console.log(arr)

// let arr = [43 , 65 , 45 , 22 , 54 , 10];
// let a = arr.map((index) => {
//     return (index + 1);
// });
// console.log(a)

let arr = [43 , 65 , 45 , 22 , 54 , 10];
console.log(arr);
let newArr = arr.filter((value) => {
    return value < 30 ;
})
console.log(newArr)
