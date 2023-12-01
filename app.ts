//Objeto Pessoa 
interface Pessoa {
    nome:String,
    idade:number,
    profissao?:String // "?" Atributo é OPCIONAL !!!!!
}

const pessoa:Pessoa = {
    nome: "Gabriel",
    idade: 24
}

const outraPessoa: Pessoa = {
    nome: "Isa",
    idade: 23,
    profissao: "MEDVET"
}

// Array de objetos Pessoa
const pessoas: Pessoa[] = [
    pessoa,
    outraPessoa
];