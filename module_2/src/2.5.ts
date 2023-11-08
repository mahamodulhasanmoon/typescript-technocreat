{
    // function with generics

    const createArray =(params:string): string[] => {
        return [params]
    }


    const createArrayWithGeneric = <T>(params:T):T[]=> {
        return [params]
    }

    const genRes = createArrayWithGeneric<string>('bangladesh')

}