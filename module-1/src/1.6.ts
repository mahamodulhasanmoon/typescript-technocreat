// functions

// normal function

function add(a: number, b: number):number{
    return a + b;
}
console.log(add(0, 5));

const addArrow = (a: number, b: number):number => {
return a + b;
};

// TODO: Mathod

const poorUser = {
    name: 'Moon',
    balance: 0,
    addBalance(balance: number):number{
        return( this.balance + balance)
    }
}

const arr : number[] = [2, 3, 4, 5, 6]