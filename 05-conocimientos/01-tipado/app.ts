//let username:string = "Juan"
let username = "Juan";
username = "Pedro";
//username = true
//username = 10

let patientAge: number;
let isUserLoggedIn: boolean;
patientAge = 25;
isUserLoggedIn = true;

//let listPatients: string[] = ["Juan", "Pedro", "Luis"]
//let listPatients:Array<string> = ["Juan", "Pedro", "Luis"]
let listPatients = ["Juan", "Pedro", "Luis"];
listPatients.push("Carlos");
//listPatients.push(10)
let listPatientWithAppointments: Array<{
  name: string;
  age: number;
  date: Date;
}> = [
  { name: "Josefina", age: 25, date: new Date() },
  { name: "Maria", age: 30, date: new Date() },
];

console.log(listPatients);
