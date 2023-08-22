"use strict";
const sumEvenNumbers = (arr) => {
    let evenSum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            evenSum += arr[index];
        }
    }
    return evenSum;
};
const rectArea = (rect) => {
    return rect.height * rect.width;
};
const isPalindromm = (str) => {
    let start = 0;
    let end = str.length - 1;
    while (start <= end) {
        if (str.charAt(start) !== str.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
const firstUpper = (words) => {
    const firstUpperArr = [];
    for (let word = 0; word < words.length; word++) {
        let cur = words[word];
        cur = cur.toLowerCase();
        cur = cur.charAt(0).toUpperCase() + cur.substring(1);
        firstUpperArr.push(cur);
    }
    return firstUpperArr;
};
const uniqueNumbers = (arr) => {
    const uniqueArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (!uniqueArr.includes(arr[index])) {
            uniqueArr.push(arr[index]);
        }
    }
    return uniqueArr;
};
const personTest = {
    firstName: "yosy",
    lastName: "tuvy",
};
const initialPerson = (person) => {
    const firstInitial = person.firstName.charAt(0);
    const lastInitial = person.lastName.charAt(0);
    const initial = {
        firstName: firstInitial,
        lastName: lastInitial,
    };
    return initial;
};
const avgAge = (personDetails) => {
    let ageSum = 0;
    for (let person = 0; person < personDetails.length; person++) {
        ageSum += personDetails[person].age;
    }
    return ageSum / personDetails.length;
};
const minMaxInArr = (arr) => {
    let min = Infinity;
    let max = -Infinity;
    for (let index = 0; index < arr.length; index++) {
        const number = arr[index];
        if (number > max) {
            max = number;
        }
        if (number < min) {
            min = number;
        }
    }
    return { min, max };
};
const printReverseArr = (arr) => {
    for (let index = arr.length - 1; index > -1; index--) {
        console.log(arr[index]);
    }
};
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(rectArea({ width: 11, height: 10 }));
console.log(isPalindromm("abkba"));
console.log(firstUpper(["HELLO", "heLLO", "Hello"]));
console.log(uniqueNumbers([1, 2, 3, 3, 2, 4, 5]));
console.log(initialPerson(personTest));
console.log(avgAge([
    { name: "yosy", age: 26 },
    { name: "mosh", age: 20 },
    { name: "muti", age: 30 },
]));
console.log(minMaxInArr([1, 2, 3, 4, 2, 8]));
printReverseArr([1, 2, 3, 4, 5]);
