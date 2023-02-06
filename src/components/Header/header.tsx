import { FC } from "react";
import { HeaderWrapper } from "./header.styled";
import { ThemeToggle } from './components/ThemeToggle'

export const Header: FC = () => {
  return <HeaderWrapper>
    <ThemeToggle />
  </HeaderWrapper>
}