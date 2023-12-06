//Banco
//name | accountNumber
//DEPOSITAR | SACAR

//Classe de Conta Bancaria
abstract class Account {
    name: String
    accountNumber: number
    balance: number = 0

    constructor(name: String, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () =>{
        console.log("Voçê Depositou!")
    }
    
    withraw = () =>{
        console.log("Voçê Sacou!")
    }

    getBalance = () => {
        console.log(this.balance)
    }
}

//Classe de Administrador
class Admin extends Account{

    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
        this.balance = 20
    }

    
}

class PeopleAccount extends Account{
    doc_id:number

    constructor(doc_id:number, name:String, accountNumber:number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Gabriel", 20)
console.log(peopleAccount)