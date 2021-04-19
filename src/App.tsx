
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyles } from './styles/global';
import { createServer } from 'miragejs';
import React, { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

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
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransectionMondal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    
      <GlobalStyles />
    </>
  );
}

export default App;
