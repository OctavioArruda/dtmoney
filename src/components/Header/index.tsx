import logoImg from '../../assets/logo.svg'
import {
  Content,
  Button,
  Container,
} from './styles'

export function Header(): JSX.Element {
  return (
    <Container>
      <Content>
        <img
          src={logoImg}
          alt="dt money"
        />
        <Button type="button">
          Nova transação
        </Button>
      </Content>
    </Container>
  )
}
