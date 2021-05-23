import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import App from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance website',
          type: 'deposit',
          category: 'Development',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:23'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Expenses',
          amount: 1000,
          createdAt: new Date('2021-03-10 09:23:12'),
        },
        {
          id: 3,
          title: 'Formatar PC',
          type: 'deposit',
          category: 'Maintenance',
          amount: 100,
          createdAt: new Date('2021-03-10 10:54:19'),
        },
      ],
    })
  },
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (_, request) => {
      const data = JSON.parse(request.requestBody)

      return this.schema.create('transaction', data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
