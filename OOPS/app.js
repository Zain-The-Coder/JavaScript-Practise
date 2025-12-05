// let car = {
//     name : "Totota" ,
//     color : "black" ,
//     numberPlate : 1002 ,
// }
// car.model = "2920" ;
// console.log(car.numberPlate)


//Inheritence 

// class Car  {
//     constructor (carName , carColor) {
//         this.carName = "Toyota" ;
//         this.carColor = "black" ;
//     }
//     getVarient () {
//         console.log("hello world");
//     }
// }
// console.log(new Car);


class Car {
    constructor (carName, color) {
        this.carName = carName;
        this.color = color;
    }    
    getPrice () {
        console.log("hello world")
    }
    start () {
        console.log("engine started with noise!");
    }
}

let x = new Car("Toyota" , "Black");
x.getPrice();
x.start();
