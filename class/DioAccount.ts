//Classe de Conta Bancaria
export abstract class DioAccount {
    private name: String
    private readonly accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name: String, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }

    getName = (): String =>{
        return this.name
    }

    setName = (name: String): void  => {
        this.name = name
        console.log("Nome Alterado !!")
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    deposit = (): void =>{
        if(this.validadeStatus()){
            console.log("Voçê Depositou!")
        }
    }
    
    withraw = (): void  =>{
        console.log("Voçê Sacou!")
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validadeStatus = () => {
        if(this.status){
            return this.status
        }

        throw new Error("Conta Invalida")
    }
}

//Classe de Administrador
export class Admin extends DioAccount{

    constructor(name:string, accountNumber: number){
        super(name, accountNumber)
        this.balance = 10
    }

    
}