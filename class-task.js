// Problem - 1
//Task - 1
 const multiplyNum = (a, b, c) => a * b * c;
// console.log(multiplyNum(2, 3, 2)); //ans

// Task - 2
 const sentence = `I am a web developer. \nI love to code. \nI love to eat biryani.`;
// console.log(sentence); //ans

// Task - 3
 const number = (a, b=10) => a+b;
// console.log(number(20)); //ans


// Problem - 2
const friends = ['raju', 'sajib', 'jony', 'nahid', 'al-amin', 'mahibur', 'onik'];
const nameLength = friends.filter(name => name.length % 2 === 0); // even name length return
// console.log(nameLength);


// Problem - 3
const total = (num) => {
    const squar = num.reduce((sum, num) => sum + num ** 2, 0); // array all number squar use reduce 
    const avarage = squar / num.length; //avarage in allsum arrray number 
    return avarage;
} 
const numbers = [2, 3, 4, 5, 6];
// console.log(total(numbers));



// Problem - 4
const array1 = [10, 22, 53, 74, 95];
const array2 = [61, 32, 82, 95, 100];
const maxNum = (arr1, arr2) => {
    const addTowArray = [...arr1, ...arr2]; //two array added and one array create
    const biggestNum = Math.max(...addTowArray); //biggest num search in array
    return biggestNum;
}
console.log(maxNum(array1, array2));




   


