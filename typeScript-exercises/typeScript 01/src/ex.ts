const bigger: (a: number, b: number) => number = (
    a: number,
    b: number
): number => {
    if (a > b) {
        return a;
    }
    return b;
};

const printBigger = (a: number, b: number): void => {
    console.log(bigger(a, b));
};

const isEven = (num: number): string => {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
};

const lengthOfString = (s: string): number => {
    return s.length;
};

const numberedArray = (num: number): number[] => {
    const arr: number[] = [];
    for (let i = 1; i < num; i++) {
        arr.push(i);
    }
    return arr;
};

const maxNumInArr = (arr: number[]): number => {
    let maxNum: number = -Infinity;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > maxNum) {
            maxNum = arr[index];
        }
    }
    return maxNum;
};

type Person = {
    Name: string;
    Age: number;
    isStudent: boolean;

    [key: string]: any;
};

const printPerson = (person: Person): void => {
    for (let key in person) {
        console.log(`${key}:${person[key]}`);
    }
};

const isMinor = (person: Person): boolean => {
    if (person.Age < 18) {
        return false;
    }
    return true;
};

interface Book {
    Title: string;
    Author: string;
    Year: number;
}

type Reader = {
    Person: Person & { favoriteBook: Book };

    [key: string]: any;
};

const personTest: Person = {
    Name: "yosy",
    Age: 26,
    isStudent: true,
};

const personTest1: Person = {
    Name: "mosh",
    Age: 20,
    isStudent: false,
};

const bookTest: Book = {
    Title: "life",
    Author: "hanoch",
    Year: 2020,
};

const bookTest1: Book = {
    Title: "harry poter",
    Author: "dont Know",
    Year: 2001,
};

const readerTest: Reader = {
    Person: {
        ...personTest,
        favoriteBook: bookTest,
    },
};

const readerTest1: Reader = {
    Person: {
        ...personTest1,
        favoriteBook: bookTest1,
    },
};

/**
 * The function `oldestReader` takes an array of `Reader` objects and returns the reader with the
 * highest age, or `-1` if the array is empty.
 * @param {Reader[]} readersArr - An array of Reader objects.
 * @returns The function `oldestReader` returns the oldest reader from the `readersArr` array.
 */
const oldestReader = (readersArr: Reader[]): Reader | number => {
    let oldest: number = 0;
    let oldetIndex: number = -1;
    for (let reader = 0; reader < readersArr.length; reader++) {
        let correntAge = readersArr[reader].Person.Age;
        if (correntAge > oldest) {
            oldest = correntAge;
            oldetIndex = reader;
        }
    }
    return readersArr[oldetIndex];
};

const oldestBook = (readersArr: Reader[]): Book | number => {
    let oldest: number = Infinity;
    let oldetIndex: number = -1;
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

///         Testing:        ///
////////////////////////////////////////////////////

// console.log(bigger(4, 2));
// printBigger(2, 4);
// console.log(isEven(3));
// console.log(lengthOfString('abcdefg'));
// console.log(numberedArray(4));
// console.log(maxNumInArr([2, 1, 4, 3, 5]));
// printPerson(personTest);
// console.log(isMinor(personTest));
// console.log(oldestReader([readerTest, readerTest1]));
// console.log(oldestBook([readerTest, readerTest1]));
