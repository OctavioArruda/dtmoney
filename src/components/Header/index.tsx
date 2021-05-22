import logoImg from '../../assets/logo.svg'
import {
  Content,
  Button,
  Container,
} from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({
  onOpenNewTransactionModal,
}: HeaderProps): JSX.Element {
  return (
    <Container>
      <Content>
        <img
          src={logoImg}
          alt="dt money"
        />
        <Button
          type="button"
          onClick={
            onOpenNewTransactionModal
          }
        >
          Nova transação
        </Button>
      </Content>
    </Container>
  )
}
