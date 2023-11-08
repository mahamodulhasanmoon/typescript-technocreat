{
    // better type handleing like type assertions   and type narrowing
let anything:any;
anything='Next step development';
(anything as string).concat('2')

}

type CustomError ={
    message:string;
}
try {
    
} catch (error) {
    console.log((error as CustomError).message);
}