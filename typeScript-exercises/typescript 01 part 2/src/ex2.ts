const sumEvenNumbers = (arr: number[]): number => {
    let evenSum: number = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] % 2 === 0) {
            evenSum += arr[index];
        }
    }
    return evenSum;
};

type Rectangle = {
    width: number;
    height: number;
};

const rectArea = (rect: Rectangle): number => {
    return rect.height * rect.width;
};

const isPalindromm = (str: string): boolean => {
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

const firstUpper = (words: string[]): string[] => {
    const firstUpperArr: string[] = [];
    for (let word = 0; word < words.length; word++) {
        let cur = words[word];
        cur = cur.toLowerCase();
        cur = cur.charAt(0).toUpperCase() + cur.substring(1);
        firstUpperArr.push(cur);
    }
    return firstUpperArr;
};

const uniqueNumbers = (arr: number[]): number[] => {
    const uniqueArr: number[] = [];
    for (let index = 0; index < arr.length; index++) {
        if (!uniqueArr.includes(arr[index])) {
            uniqueArr.push(arr[index]);
        }
    }
    return uniqueArr;
};

type Person = {
    firstName: string;
    lastName: string;
};

type PersonInitial = {
    firstName: string;
    lastName: string;
};

const personTest: Person = {
    firstName: "yosy",
    lastName: "tuvy",
};

const initialPerson = (person: Person): PersonInitial => {
    const firstInitial = person.firstName.charAt(0);
    const lastInitial = person.lastName.charAt(0);

    const initial: PersonInitial = {
        firstName: firstInitial,
        lastName: lastInitial,
    };
    return initial;
};

type PersonDetails = {
    name: string;
    age: number;
};

const avgAge = (personDetails: PersonDetails[]) => {
    let ageSum: number = 0;
    for (let person = 0; person < personDetails.length; person++) {
        ageSum += personDetails[person].age;
    }
    return ageSum / personDetails.length;
};

type MinMaxArr = {
    min: number;
    max: number;
};

const minMaxInArr = (arr: number[]): MinMaxArr => {
    let min: number = Infinity;
    let max: number = -Infinity;
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

const printReverseArr = (arr: number[]): void => {
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
console.log(
    avgAge([
        { name: "yosy", age: 26 },
        { name: "mosh", age: 20 },
        { name: "muti", age: 30 },
    ])
);
console.log(minMaxInArr([1, 2, 3, 4, 2, 8]));
printReverseArr([1, 2, 3, 4, 5]);
