import {
  FormEvent,
  useState,
} from 'react'
import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import {
  MainForm,
  TransactionTypeContainer,
  RadioBox,
} from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps): JSX.Element {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] =
    useState('')
  const [type, setType] =
    useState('deposit')

  function handleCreateNewTransaction(
    event: FormEvent
  ): void {
    event.preventDefault()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img
          src={CloseImg}
          alt="Fechar modal"
        />
      </button>
      <MainForm
        onSubmit={
          handleCreateNewTransaction
        }
      >
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event =>
            setTitle(event.target.value)
          }
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event =>
            setValue(
              Number(event.target.value)
            )
          }
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() =>
              setType('deposit')
            }
            isActive={
              type === 'deposit'
            }
            activeColor="green"
          >
            <img
              src={IncomeImg}
              alt="Entrada"
            />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() =>
              setType('withdraw')
            }
            isActive={
              type === 'withdraw'
            }
            activeColor="red"
          >
            <img
              src={OutcomeImg}
              alt="Saída"
            />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={event =>
            setCategory(
              event.target.value
            )
          }
        />
        <button type="submit">
          Cadastrar
        </button>
      </MainForm>
    </Modal>
  )
}
