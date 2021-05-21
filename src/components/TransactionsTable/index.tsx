import { Container } from './styles'

export function TransactionsTable(): JSX.Element {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Desenvolvimento de website
            </td>
            <td className="deposit">
              R$ 12.000
            </td>
            <td>Desenvolvimento</td>
            <td>20/05/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">
              - R$ 5.000
            </td>
            <td>Casa</td>
            <td>20/05/2021</td>
          </tr>

          <tr>
            <td>Placeholder</td>
            <td className="deposit">
              R$ 12.000
            </td>
            <td>Desenvolvimento</td>
            <td>20/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
