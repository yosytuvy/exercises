const arrOfTwoTypes = <T, S>(val1: T, val2: S): any[] => {
    const arr = [];
    arr.push(val1);
    arr.push(val2);
    return arr;
};

const valByKey = <T, S extends keyof T>(object: T, key: S): any => {
    return object[key];
};

const addObjToAllArrVal = <T, U>(arr: T[], obj: U): void => {
    arr.forEach((item) => {
        (item as T & Record<"addedProp", U>).addedProp = obj;
    });
};

const removeValueByKey = <T extends Record<string, unknown>, S extends keyof T>(obj:T, key:S ): Omit<T, S> => {
    delete obj[key];
    return obj;
}

const addKeyAndVal = <T extends Record<string, unknown>, K, V>(obj:T, key:K, value:V) => {

}


// console.log(arrOfTwoTypes(1, 'a'));
// console.log(valByKey({'a':1, 2:'b'}, 2));
const arr = [{id: 1}, {id: 2}];
const obj = {x: 10}; 

// addObjToAllArrVal(arr, obj);
// console.log(arr);
const testObj = {
    key1: 'a',
    key2: 'b'
}
// const result = removeValueByKey(testObj, 'key1');
// console.log(result);



