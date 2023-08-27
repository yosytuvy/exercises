class Shape {
    info(){
        return "This is a Shape";
    }

    draw(){
        console.log(`drawing a shape`);
    }
}


class Rectangle extends Shape {
    width:number;
    height:number;

    constructor(width:number, height:number) {
        super();
        this.width = width;
        this.height = height;
    }

    info(): string {
        return "This is a Rectangle";
    }

    area(){
        return this.width * this.height;
    }

    scale(num:number){
        this.width *= num;
        this.height *= num;

        return this;
    }

    static twoRecArea(rec1:Rectangle, rec2:Rectangle){
        const newArea = rec1.area() * rec2.area();
        const newRect = new Rectangle(newArea, 1);

        return newRect;
    }
}


class ColoredRectangle extends Rectangle {
    width: number;
    height: number;
    color:string;

    constructor(width:number, height:number, color:string) {
        super(width, height);
        this.height = height;
        this.width = width;
        this.color = color;
    }

    info(): string {
        return `This is Rectangle colored ${this.color}`;
    }
}



class Square extends Rectangle{
    libWidth:number
    constructor(libWidth:number){
        super(libWidth, libWidth);
        this.libWidth = libWidth;
    }

    area(): number {
        return this.libWidth ** 2;
    }

    draw(): void {
        console.log(`drawing a square`);
    }
}


class Circle extends Shape {

    constructor(){
        super();
    }

    draw(): void {
        console.log(`drawing a circle`);
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    draw(): void {
        console.log(`drawing a Triangle`);
    }
}


const renderShapes = (arr:Shape[]) => {
    arr.forEach((shape) => {
        shape.draw();
    });
}
