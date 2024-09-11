class Car {
    //These parameters are placeholders for the actual values of the object instances
    constructor (carColor, carBrand, carMake, carEngine){
        // giving the instance a context
        this.color = carColor,
        this.brand = carBrand,
        this.make = carMake,
        this.engine = carEngine
    }
    //This is a custom method
description(){
    console.log(`This ${this.brand} is a classic design`);
}
}



//Building an instance of car object
const yaris = new Car(
    "blue", "Toyota", "Yaris", "v2"
);
console.log(yaris);
yaris.description();



const morgan = new Car(
    "black", "Morgan", "Aero", "petrol", "2.0"
)
console.log(morgan)
morgan.description();



class Toyota extends Car {
    constructor (carColor, carBrand, carMake, carEngine,carReleasedate, warranty){
        // the super operator uses the smae properties as the above Car
        super(
        carColor,
        carBrand,
        carMake,
        carEngine,
        )
        this.releaseDate = carReleasedate,
        this.warranty = warranty
    }
}

//This is an instance of a Toyota
const supra = new Toyota(
    "yello", "Toyota", "Supra", "v2", 2024, "Yes"
)
console.log(supra);