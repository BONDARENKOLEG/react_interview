import { FC } from "react";
import { HeaderWrapper } from "./header.styled";
import { Currency } from "./components/Currency";
import { ThemeToggle } from './components/ThemeToggle'

export const Header: FC = () => {
  return <HeaderWrapper>
    <Currency />
    <ThemeToggle />
  </HeaderWrapper>
}