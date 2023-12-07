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
        this.balance = 10
    }

    
}

class PeopleAccount extends Account{
    doc_id:number

    constructor(doc_id:number, name:String, accountNumber:number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}

class CompanyAccount extends Account {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = () =>{
        console.log("Voce pegou um emprestimo")
    }

}

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Gabriel", 10)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20)
console.log(companyAccount)