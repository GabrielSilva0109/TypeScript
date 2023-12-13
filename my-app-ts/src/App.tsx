import { Layout } from './components/Layout';
import styled from 'styled-components';

function App() {
  return (
    <Layout>
      <h1>Faça o Login</h1>
      <label htmlFor='emailInput'>
        Email
      </label>
      <input id='emailInput' type='emailW'/>
      <label htmlFor='passwordInput'>
        Senha
      </label>
      <input id='passwordInput'type='password'/>
      <button>
        Entrar
      </button>
    </Layout>
  );
}

export default App;
