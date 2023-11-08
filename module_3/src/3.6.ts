{
    // getter and setter

    class BankAccount {
      readonly  id:number;
      protected  _balance:number;
      public  name:string;

        constructor(id:number, name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

      public  addBalance(dipositBalance:number){
            this._balance = this._balance + dipositBalance
        }
//  get balance using getter

get balance (){
    return this._balance;
}
set balance(dipositBalance:number){
    this._balance = this._balance  + dipositBalance
}
    }


    const bekarManusAccount = new BankAccount(1,'MR Kamal',30)
    
    bekarManusAccount.name = 'Mahamodul Hasan Moon'
    bekarManusAccount.balance  = 160
    
    console.log(bekarManusAccount.balance)
    // access modifiers end code 


}