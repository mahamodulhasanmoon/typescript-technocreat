{
    // in dept understanding of Promise

    // basic promise 

    const createPromise = ()=>{
        return new Promise((resolve,reject) =>{
            const data:string = "hello world";
            if(data){
                resolve(data);
            }else{
                reject('failed to load Data')
            }

        })
    }

    const getTodo = async () => {

        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        console.log(data)
    }

    // call create promise function

    // const loadData = async ():Promise<string> =>{
    //     const data = await createPromise()
    //     console.log(data);
        
    // }

    // end of the code
}