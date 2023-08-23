"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
function filterItems(items, filterFn) {
    const filteredArr = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
        if (filterFn(items[itemIndex])) {
            filteredArr.push(items[itemIndex]);
        }
    }
    return filteredArr;
}
function printItemsData(items) {
    let cnt = 1;
    for (const element of items) {
        const keys = Object.keys(element);
        const value = Object.values(element);
        console.log(`${cnt}.`);
        for (let i = 0; i < keys.length; i++) {
            console.log(`${keys[i]}: ${value[i]}`);
        }
        cnt++;
    }
}
const libraryItems = [
    {
        type: ItemType.Book,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
    },
    { type: ItemType.DVD, title: "Inception", duration: 148 },
    {
        type: ItemType.Book,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
    },
    { type: ItemType.DVD, title: "Avatar", duration: 162 },
    { type: ItemType.Book, title: "Go Set a Watchman", author: "Harper Lee" },
];
printItemsData(libraryItems);
console.log(libraryItems[1].type);
console.log(filterItems(libraryItems, (item) => {
    return item.type === 'dvd' && item.duration > 120;
}));
console.log(filterItems(libraryItems, (item) => {
    return item.type === 'book' && item.author === 'Harper Lee';
}));
