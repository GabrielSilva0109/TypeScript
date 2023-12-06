
class User {
    name: String = "Gabriel"
    idade: number = 24

    constructor(name: string, idade: number){
        this.name = name,
        this.idade = idade
    }

    show(){
        console.log(this.name)
    }
}


const user = new User("PEdro", 33)
user.show()