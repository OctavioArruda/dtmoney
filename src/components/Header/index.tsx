import logoImg from '../../assets/logo.svg'

export function Header(): JSX.Element {
  return (
    <header>
      <img
        src={logoImg}
        alt="dt money"
      />
      <button type="button">
        Nova transação
      </button>
    </header>
  )
}
