import { GlobalStyle } from './styles/global'

import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

export function App(): JSX.Element {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}

export default App
