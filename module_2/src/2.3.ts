{
    // generic types
    type GenaticArray<T> = Array<T>

    // const rollNumbers:number[]=[368];

    // its genaric types
    const rollNumbers:GenaticArray<number> =[368];
    const mentors:GenaticArray<String> =['kakku ','messi'];
    const boolArray:GenaticArray<boolean> = [true, false, true, false]


    const user :GenaticArray<{
        name: string,age: number
    }> = [
        {
            name:'kakku2',
            age:18,
        },
        {
            name:'kakku',
            age:26,
        }
    ]

   

   const add =(x:number,y:number)=> x+y

add(20,30)

// Ganaric tuple

type GenaticTuple<x,y> =[x,y]

const manus:GenaticTuple <string,string> = ['MR. Moon','Aziza']

const userWithId:GenaticTuple <number,{
    name:string,email:string
}> = [1234,{
    name:'parsing',
    email: 'parsing@gmail.com'
}]

}