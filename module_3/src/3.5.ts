{
    // access modifiers

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
      public  getBalance(){
            return this._balance
        }
    }

    class StudentAccount extends BankAccount {
    test(){
       this._balance 
    }
    }

    const bekarManusAccount = new BankAccount(1,'MR Kamal',30)
    
    bekarManusAccount.name = 'Mahamodul Hasan Moon'
    bekarManusAccount.addBalance(30)
    
    console.log(bekarManusAccount.getBalance())
    // access modifiers end code 


}