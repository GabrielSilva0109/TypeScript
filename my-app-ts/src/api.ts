import { resolve } from "path"

const conta = {
    email: "gabriel@gmail.com",
    password: "gabriel",
    name: "Gabriel Silva"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})