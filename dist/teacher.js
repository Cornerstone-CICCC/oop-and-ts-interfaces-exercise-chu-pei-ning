"use strict";
// interface IPerson {
//   name: string,
//   age: number,
//   introduce: (message: string) => string
// }
// const newPerson: IPerson = {
//   name: "John",
//   age: 30,
//   introduce(message) {
//     return `Hi my name is ${this.name}. I am ${this.age} years old. ${message}`
//   }
// }
// console.log(newPerson.introduce("I like to play soccer."))
// interface IStudent {
//   firstname: string;
//   lastname: string;
//   grade: number;
//   sayGreeting: () => string
// }
// class Student implements IStudent {
//   firstname: string;
//   lastname: string;
//   grade: number;
//   constructor(fname: string, lname: string, grade: number) {
//     this.firstname = fname
//     this.lastname = lname
//     this.grade = grade
//   }
//   sayGreeting() {
//     return `My name is ${this.firstname} ${this.lastname} and my grade is ${this.grade}.`
//   }
// }
// const newStudent: IStudent = new Student("John", "Smith", 90)
// const newStudent2 = new Student("Jane", "Doe", 95)
// interface IStudentName {
//   fname: string
//   lname: string
//   sayGreeting: () => string
// }
// interface IHomeRoom {
//   classCode: number
//   isAvailable: boolean
// }
// interface IContactInfo {
//   phone: number
//   email: string
// }
// class HighSchoolStudent implements IStudentName, IHomeRoom, IContactInfo {
//   fname: string;
//   lname: string;
//   classCode: number;
//   isAvailable: boolean;
//   phone: number;
//   email: string;
//   constructor(fn: string, ln: string, classCode: number, isAvailable: boolean, phone: number, email: string) {
//     this.fname = fn
//     this.lname = ln
//     this.classCode = classCode
//     this.isAvailable = isAvailable
//     this.phone = phone
//     this.email = email
//   }
//   sayGreeting() {
//     return `My name is ${this.fname} ${this.lname} of ${this.classCode}. My contact number is ${this.phone} and my email is ${this.email}. ${this.isAvailable ? 'I am currently enrolled.' : 'I am not currently enrolled.'}`
//   }
// }
// const newHSStudent = new HighSchoolStudent("John", "Smith", 105, true, 1234567, "johnsmith@school.com")
// enum Color {
//   Black,
//   Brown,
//   Red,
//   Blonde
// }
// interface IBaby {
//   readonly name: string;
//   readonly dob: Date;
//   hairColor: Color;
// }
// const newBaby: IBaby = {
//   name: "Baby Yo",
//   dob: new Date(),
//   hairColor: Color.Black
// }
// //newBaby.name = "Baby Ya"  // Fails 
// newBaby.hairColor = Color.Red
// //newBaby.dob = new Date()  // Fails
// interface IPet {
//   readonly breed: string;
//   name: string;
// }
// class Pet implements IPet {
//   breed: string;
//   name: string;
//   constructor(b: string, n: string) {
//     this.breed = b
//     this.name = n
//   }
// }
// const petDog: IPet = new Pet("Dalmatian", "Jorge")
// petDog.name = "Janina"
// //petDog.breed = "Pitbull" // Fails
// type CalcFn = (a: number, b: number) => number // Option 1
// interface AddFn { // Option 2
//   (a: number, b: number): number
// }
// const add: AddFn = (a, b) => {
//   return a + b
// }
// // Optional interface
// enum Departments {
//   Engineering = "Engineering",
//   Marketing = "Marketing",
//   Sales = "Sales",
//   Admin = "Admin"
// }
// interface IDepartment {
//   deptName: Departments
//   benefits?: string[] // optional
// }
// interface IEmployee extends IDepartment {
//   readonly name: string
//   startDate: Date
// }
// class StoreEmployee implements IEmployee {
//   deptName: Departments;
//   name: string;
//   startDate: Date;
//   benefits?: string[];
//   constructor(dn: Departments, n: string, sd: Date, b: string[] = []) {
//     this.deptName = dn
//     this.name = n
//     this.startDate = sd
//     this.benefits = b
//   }
// }
// const newStoreEmployee = new StoreEmployee(Departments.Engineering, "John Smith", new Date())
// const newStoreEmployee2 = new StoreEmployee(Departments.Admin, "Jane Doe", new Date(), ["60 day leave", "13th month bonus"])
// console.log(newStoreEmployee)
// console.log(newStoreEmployee2)
// interface IMember {
//   readonly name: string;
//   membershipDate: Date;
//   allergies?: string[]
// }
// const newMember: IMember = {
//   name: "John Smith",
//   membershipDate: new Date(),
//   allergies: ["rice", "egg"]
// }
// const newMember2: IMember = {
//   name: "Jane Doe",
//   membershipDate: new Date()
// }
// type DayEvent = {
//   name: string,
//   date: Date
// }
// type Venue = {
//   address: string
//   isAvailable: boolean
// }
// type Sponsor = {
//   sponsorName?: string;
//   amount?: number
// }
// type EventVenue = DayEvent & Venue & Sponsor
// const newEvent: EventVenue = {
//   name: "Sun Run 2025",
//   date: new Date(),
//   address: "Gastown, Vancouver",
//   isAvailable: true,
//   sponsorName: "Toyota",
//   amount: 100000
// }
// const newEvent2: EventVenue = {
//   name: "Night Run 2026",
//   date: new Date(),
//   address: "Stanley Park, Vancouver",
//   isAvailable: true
// }
// type User = {
//   fname: string;
//   lname: string;
// }
// type Rental = {
//   address: string;
//   price: number;
// }
// type UserRental = User & Rental
// const newProperty: UserRental = {
//   fname: "John",
//   lname: "Smith",
//   address: "Port Coquitlam, BC",
//   price: 3000
// }
// interface IUser {
//   fname: string;
//   lname: string;
// }
// interface IRental {
//   address: string;
//   price: number;
// }
// interface IUserRental extends IUser, IRental {}
// const newRenta: IUserRental = {
//   fname: "Jane",
//   lname: "Doe",
//   address: "Burnaby, BC",
//   price: 4000
// }
// // Intersection type (Union)
// type NumStr = string | number
// type StrBool = string | boolean
// type DateStr = Date | string
// type Combine = NumStr & StrBool & DateStr
// const firstname: Combine = "John" // string
// // Type guard
// type NumStr2 = number | string
// function combine(input1: NumStr2, input2: NumStr2): NumStr2 {
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     return input1 + input2
//   }
//   return input1.toString() + input2.toString()
// }
// // Type guard - Class
// class Car {
//   drive() {
//     console.log("Driving at 80km/h...")
//   }
//   speedUp() {
//     console.log("Speeding up to 120km/h...")
//   }
// }
// class Truck {
//   drive() {
//     console.log("Driving at 40km/h...")
//   }
//   loadCargo(cargo: number) {
//     console.log(`Loaded ${cargo} of cargo...`)
//   }
// }
// type Vehicle = Car | Truck;
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive()
//   if (vehicle instanceof Car) {
//     vehicle.speedUp() // Triggers only for Car instance
//   }
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000) // Triggers only for Truck instance
//   }
// }
// const vehicle1 = new Car()
// const vehicle2 = new Truck()
// useVehicle(vehicle1)
// useVehicle(vehicle2)
// // Discriminated unions
// enum Product {
//   Fruit = "Fruit",
//   Vegetable = "Vegetable"
// }
// interface IFruit {
//   type: Product.Fruit,
//   name: string
// }
// interface IVegetable {
//   type: Product.Vegetable,
//   nutritionValue: number
// }
// type Produce = IFruit | IVegetable
// function describeProduce(item: Produce) {
//   if (item.type === Product.Fruit) {
//     console.log("It's a fruit!")
//   } else if (item.type === Product.Vegetable) {
//     console.log("It's a veggie!")
//   }
// }
// const apple: Produce = { type: Product.Fruit, name: "Apple" }
// describeProduce(apple)
// const cabbage: Produce = { type: Product.Vegetable, nutritionValue: 100 }
// describeProduce(cabbage)
// // Type-casting
// // const usernameInput = document.querySelector('#username') as HTMLInputElement
// // const emailInput = document.querySelector('#email') as HTMLInputElement
// // const userList = document.querySelector('ul.list') as HTMLUListElement
// // const workCheckbox = document.querySelector('#checkbox') as HTMLInputElement
// // const message = document.querySelector('#message') as HTMLTextAreaElement
// // const pageTitle = document.querySelector('h1.title') as HTMLHeadingElement
// // const username = usernameInput.value
// // Index properties
// type Info = {
//   [props: string]: string;
// }
// const newPet: Info = {
//   name: "Sasha",
//   favouriteToy: "RoboCop",
//   speak: "Woof woof..."
// }
// const newOwner: Info = {
//   firstname: "John",
//   lastname: "Smith"
// }
// type Stat = {
//   [props: string]: number | string
// }
// const student1PE: Stat = {
//   cardio: "One hundred",
//   physical: 80,
//   swimming: 90,
//   jogging: 100
// }
// const student2PE: Stat = {
//   cardio: 100,
//   physical: 70,
//   basketball: 90
// }
// // Optional chaining
// interface IUser2 {
//   name: string;
//   isMarried?: {
//     spouseName: string;
//   };
//   address?: {
//     city?: {
//       name: string;
//       population: number;
//     };
//     zipCode?: string;
//   }
// }
// const newUser: IUser2 = {
//   name: "John",
//   address: {
//     city: {
//       name: "Vanocouver",
//       population: 1000000
//     },
//     zipCode: "V00 N00"
//   }
// }
// const newUser2: IUser2 = {
//   name: "Jane",
//   isMarried: {
//     spouseName: "John"
//   }
// }
// function displayUser(user: IUser2): void {
//   console.log(user.isMarried?.spouseName)
//   console.log(user.address?.city?.name)
// }
// displayUser(newUser)
// const newBlog = {
//   title: "First article",
//   featuredImage: ""
// }
// const newBlog2 = {
//   title: "Second article",
//   featuredImage: ""
// }
// console.log(newBlog.featuredImage ?? "backup.png")
// console.log(newBlog2.featuredImage || "backup.png")
// // ?? - undefined, null
// // || - falsy: 0, "", undefined, null, false
