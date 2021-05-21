import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
`

export const Button = styled.button`
  background: var(--blue-light);
  border: none;
  color: var(--shape);
  padding: 0 2rem;
  font-weight: 600;
  border-radius: 0.2rem;

  &:hover {
    filter: brightness(0.9);
  }
`
