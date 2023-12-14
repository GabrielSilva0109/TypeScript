import { multiplica, soma } from './soma'

describe('soma', () => {
    it('Deve somar 1 ao numero informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it("Deve multiplicar o numero por dois" , () => {
        const value = multiplica(2)
        expect(value).toBe(4)
    })
})