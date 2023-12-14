import { login } from "./login"

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir boas vindas', () => {
        login()
        expect(window.alert).toBeCalled()
    })
})