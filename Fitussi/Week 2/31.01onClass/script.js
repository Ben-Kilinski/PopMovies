/*let spiderman = {
    name: "Peter Parker",
    age: 34,
    profession: "photographer",
    powers: "spider"
}
console.log(spiderman)

let myComputer = {
    company: "asus",
    Ram: "16 Gb",
    Hd: "1T",
    video: "Nvidia",
}
console.log(myComputer)

let person = {
    name: "Ben",
    age: 27,
    isStudent: false,
}
person.isStudent = true
console.log(`Name: ${person.name} 
age: ${person.age}`)

let car = {
    company: "Peaugeaut",
    model: 2008,
    year: 2014
}
console.log(`Company: ${car.company}
Model: ${car.model}`)
car.year = 2015
console.log(car)

let fruit = {
    name: "strawberrie",
    color: "red",
    sweetness: 7
}
console.log(`${fruit.name}
sweetness: ${fruit.sweetness}`)
fruit.color = "blue"
console.log(fruit)


let book1 = {
    title: "The lord of the Rings",
    author: "Tolkien",
    pages: 1227,
}
console.log(`${book1.title}
Author: ${book1.author}`)
book1.pages += 50
console.log(book1)

let book2 = {
    title: "D'Vince Code",
    author: "Dan Brown",
    pages: 566,
}

let animal = {
    species: "fish",
    sound: "glu",
    isWild: true,
}
console.log(`${animal.species}
Author: ${animal.sound}`)
animal.isWild = true
console.log(animal)*/

/*console.log(car.model)
car.year = 2015
car.color = "gray"
console.log(car)*/

let car = {
    company: "Peugeot",
    model: 2008,
    year: 2014,
    details: function () {
        console.log(`details of the this car: ${this.company} (${this.model}), ${this.year}`)
    }
}
car.details()

let Keys_Array = Object.keys(car) // ['company', 'model', 'year', 'color']
function printCars() {
    for (let i = 0; i < Keys_Array.length; i++) {
        console.log(`${Keys_Array[i]}: ${car[Keys_Array[i]]}`)
    }
}
printCars(car)

let person = {
    name: "Ben",
    age: 27,
    isStudent: false,
}
console.log(Object.keys(person))

