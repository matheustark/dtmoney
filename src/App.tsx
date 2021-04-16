import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyles } from './styles/global';
import { createServer } from 'miragejs';
import React from 'react';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()

        }
      ]
    });
  }
})

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
}

export default App;
