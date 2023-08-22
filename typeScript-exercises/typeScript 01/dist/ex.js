"use strict";
const bigger = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
};
const printBigger = (a, b) => {
    console.log(bigger(a, b));
};
const isEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
};
const lengthOfString = (s) => {
    return s.length;
};
const numberedArray = (num) => {
    const arr = [];
    for (let i = 1; i < num; i++) {
        arr.push(i);
    }
    return arr;
};
const maxNumInArr = (arr) => {
    let maxNum = -Infinity;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > maxNum) {
            maxNum = arr[index];
        }
    }
    return maxNum;
};
const printPerson = (person) => {
    for (let key in person) {
        console.log(`${key}:${person[key]}`);
    }
};
const isMinor = (person) => {
    if (person.Age < 18) {
        return false;
    }
    return true;
};
;
const personTest = {
    Name: "yosy",
    Age: 26,
    isStudent: true
};
const bookTest = {
    Title: "life",
    Author: "hanoch",
    Year: 2020
};
const readerTest = {
    Person: {
        ...personTest,
        favoriteBook: bookTest
    }
};
/**
 * The function `oldestReader` takes an array of `Reader` objects and returns the reader with the
 * highest age, or `-1` if the array is empty.
 * @param {Reader[]} readersArr - An array of Reader objects.
 * @returns The function `oldestReader` returns the oldest reader from the `readersArr` array.
 */
const oldestReader = (readersArr) => {
    let oldest = 0;
    let oldetIndex = -1;
    for (let reader = 0; reader < readersArr.length; reader++) {
        let correntAge = readersArr[reader].Person.Age;
        if (correntAge > oldest) {
            oldest = correntAge;
            oldetIndex = reader;
        }
    }
    return readersArr[oldetIndex];
};
const oldestBook = (readersArr) => {
    let oldest = Infinity;
    let oldetIndex = -1;
    for (let reader = 0; reader < readersArr.length; reader++) {
        let currentBookYear = readersArr[reader].Person.favoriteBook.Year;
        if (currentBookYear < oldest) {
            oldest = currentBookYear;
            oldetIndex = reader;
        }
    }
    if (oldetIndex > 0) {
        return readersArr[oldetIndex].Person.favoriteBook;
    }
    return -1;
};
