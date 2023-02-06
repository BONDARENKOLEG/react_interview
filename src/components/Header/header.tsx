import { FC } from "react";
import { HeaderWrapper } from "./header.styled";
import { ThemeToggle } from './components/ThemeToggle'
import { CurrencyRate } from "./components/CurrencyRate";


export const Header: FC = () => {
  return <HeaderWrapper>
    <CurrencyRate />
    <ThemeToggle />
  </HeaderWrapper>
}