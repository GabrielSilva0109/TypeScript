const typeUser = {
    admin: "Seja bem vindo admin",
    student: "Você é estudande",
    viewer: "Você pode visualizar"
}

function validarUser(user: String){
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validarUser(usuario)