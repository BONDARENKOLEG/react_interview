import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FooterWrapper } from './footer.styled'

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Link to='/buy'>Please buy me</Link>
    </FooterWrapper>)
}