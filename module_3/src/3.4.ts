{
    // instance of guard 

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound(){
            console.log('i am Making sound')
        }
    }

class Dog extends Animal {
    constructor(name: string, species: string){
        super(name, species)
    }
    makeBark(){
        console.log('I am bow bow');
    }
};

class Cat extends Animal {
    constructor(name: string, species: string){
        super(name, species)
    }
    makeMew(){
        console.log('I am mew mww');
    }
};

// smart way to handle getAnimal using Function

const isDog = (animal:Animal): animal  is Dog =>{
    return animal instanceof Dog
}
const isCat= (animal:Animal) : animal  is Cat =>{
    return animal instanceof Cat
}

const getAnimal = (animal: Animal)=>{
if(isCat(animal)){
    animal.makeMew()
}
if(isDog(animal)){
    animal.makeBark()
}else{
    animal.makeSound()
}




}
const dog1 = new Dog('tomy','dog');
dog1.makeBark();


const cat1 = new Cat('tomy','dog');
cat1.makeMew();
getAnimal(dog1)
    //  out of code 



}