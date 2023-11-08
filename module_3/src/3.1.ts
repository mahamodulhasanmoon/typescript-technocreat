{
    // oop class concept

    class Animal{

    //    parameter properties


        constructor(public name: string, public species: string, public sound: string){
        }
        makeSound(){
            console.log(`says: ${this.sound}`)
        }
    }


const dog = new Animal('Bangladeshi kutta','dog','gew gew');
const cat = new Animal('partial','cat','mew mww')

dog.makeSound();



    // 
}
