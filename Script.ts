interface person {
    name:string; 
    age: number;
    getPerson :(name:string, age:number) => string;
}             

class Employee implements person {
    name: string;
    age: number;
    salary:number;
    constructor(salary:number) {
        this.salary = salary;
    }
    getPerson = (name: string, age: number) : string => {
        this.name = name;
        this.age = age;
        return "Employee Name: " + name + ', age: ' + age + ', salary: ' + this.salary; 
    }

}

let employee1: person = new Employee(50000);
console.log(employee1.getPerson('Vedansh', 25)); 

let employee2: person= new Employee(100000);
console.log(employee2.getPerson('Pragna', 22));