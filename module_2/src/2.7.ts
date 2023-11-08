{
    // generic constant of keyof operator

    type Vehicle = {
        bike:string;
        car:string;
        ship:string;
    }

    type Owner = "bike" | "car" | "ship" //menually

    type Owner2 = keyof Vehicle

const  getPropsValue =<X,Y extends keyof X>(obj:X,key:Y)=> {
        
return obj[key]
    }
    const user = {
        name:'Bob',
        age:20,
        adress:'ctg'
    }
    const res1 = getPropsValue(user,'name')

//     const user = {
//         name:'Bob',
//         age:20,
//         adress:'ctg'
//     }
    
//     user['age']
// }

}