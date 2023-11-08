{

    // now make an inheritence

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number,address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours: number){
            console.log(`${this.name} total sleeping time ${numberOfHours}`);
        }

    }

    class Student extends Person{
        constructor(name: string, age: number, address: string){
            super(name, age, address);
        }
    }

    class Teacher extends Person{
        designation: string;
        constructor(name: string, age: number,address: string,designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numbarOFClass:number){
            console.log(`${this.name} your total class ${numbarOFClass}`);
        }
    }
    const student1 = new Student('Mahamodul Hasan Moon',20,'Bangladesh');
    const teacher1 = new Teacher('Mahamodul Hasan Moon',20,'Bangladesh','lecturer');
    teacher1.takeClass(20)
    teacher1.getSleep(10)
    student1.getSleep(10)



}