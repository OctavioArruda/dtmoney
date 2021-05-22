import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg'
import { MainForm } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps): JSX.Element {
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
      <MainForm>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input
          type="number"
          placeholder="Valor"
        />
        <input placeholder="Categoria" />
        <button type="submit">
          Cadastrar
        </button>
      </MainForm>
    </Modal>
  )
}
