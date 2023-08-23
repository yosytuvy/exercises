export enum ItemType {
    Book = "book",
    DVD = "dvd",
}

interface Book {
    type: ItemType.Book;
    title: string;
    author: string;
}

interface DVD {
    type: ItemType.DVD;
    title: string;
    duration: number;
}

function filterItems<T>(items: T[], filterFn: (item: T) => boolean): T[] {
    const filteredArr = [];
    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
        if (filterFn(items[itemIndex])) {
            filteredArr.push(items[itemIndex]);
        }
    }
    return filteredArr;
}

function printItemsData<T>(items: T[]): void {
    let cnt = 1;
    for (const element of items) {
        const keys = Object.keys(element as keyof T);
        const value = Object.values(element as keyof T);
        
        console.log(`${cnt}.`);
        for (let i = 0; i < keys.length; i++) {
            console.log(`${keys[i]}: ${value[i]}`);
        }
        cnt ++;
    }
}

const libraryItems: (Book | DVD)[] = [
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

console.log(filterItems(libraryItems, (item):boolean => {
    return item.type === 'dvd' && item.duration > 120
}));

console.log(filterItems(libraryItems, (item):boolean => {
    return item.type === 'book' && item.author === 'Harper Lee';
}));

