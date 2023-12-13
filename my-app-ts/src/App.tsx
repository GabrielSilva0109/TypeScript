import { Card } from './components/Card';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
        Hello Word
        <Card 
          id={1}
          paragraph='TypeScript'
          details='TS para Front e Back'/>
        <Card id={2}
          paragraph='HTML'
          details='HTML para Front'/>
        <Card id={3}
          paragraph='SQL'
          details='SQL Banco'/>
      </Layout>
  );
}

export default App;
