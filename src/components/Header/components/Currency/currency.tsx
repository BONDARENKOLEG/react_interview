
import { FC } from 'react'
import { CurrencyWrapper } from './currency.style'
import { useAppSelector } from '../../../../redux/store'
import { selectCurrency } from '../../../../redux/selectors/currency.selector'

export const Currency: FC = () => {
  const { usd, eur } = useAppSelector(selectCurrency)

  return <CurrencyWrapper>
    <div className="currency-list">
      <div className="currency-item">
        <div className="currency">USD: </div>
        <div className="rate">{usd} ₴</div>
      </div>

      <div className="currency-item">
        <div className="currency">EUR: </div>
        <div className="rate">{eur} ₴</div>
      </div>
    </div>
  </CurrencyWrapper>
}