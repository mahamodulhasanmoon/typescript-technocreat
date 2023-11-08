{
    // interface 

    // for alias type
    type User1 ={
        name: string;
        age: number;
    }
    type UserRole = User1 & {role:string};

    // for interface type 
    // not be used to  primitive Data types

    interface User2{
        name: string;
        age: number;
    }
    interface UserRole2 extends User2{
        role: string;
    }

    const user1:UserRole2 ={
        age: 10,
        name: 'John',
        role:'Web Developer'
    }
}

type AddFunc = (num1:number, num2:number)=> number
interface AddFunc2 {
    (num1:number, num2:number): number
}

const add:AddFunc2 = (num1,num2)=> num1+num2