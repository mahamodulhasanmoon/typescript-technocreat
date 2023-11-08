{
    // type gurdes

    const add = (param1:String | number, param2 : string |number) => {
        if (typeof param1 === 'number' && typeof param2 === 'number'){
           return param1 + param2
        }else{
            return param1.toString() + param2.toString();
        }
    }
    const res = add("20","30")
    console.log(res)


    //  in gurdd

    type NormalUser ={
        name: string
    }

    type AdminUser ={
        name: string
        role:"admin"
    }


const getUser = (user:AdminUser | NormalUser)=>{
    if('role' in user){
        console.log(`${user.name} is ${user.role}`)
    }else{
        console.log(`${user.name} is normal user`)
    }
}
const normal:NormalUser = {
    name: 'normal',
}
const admin:AdminUser = {
    name: 'kakku',
    role: 'admin',
}

const result = getUser(admin)














}

