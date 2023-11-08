{
    // conditional types
    type a1 = number 
    type b1 = string

    type x = a1 extends null ? true : false
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any

type Sheikh ={
    bikes: string,
    car: string,
    ship: string
}

type CheckVehicle<T> = T extends "bikes" | "car" | "ship" ? true : false

type HasBikes = CheckVehicle<"car">




}