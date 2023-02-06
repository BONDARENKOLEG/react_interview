
import { FC, useEffect } from 'react'
import { CurrencyWrapper } from './currencyRate.style'
import { useAppSelector } from '../../../../redux/store'
import { useCurrency } from '../../../../hooks/useCurrency'
import { selectCurrency } from '../../../../redux/selectors/currency.selector'

export const CurrencyRate: FC = () => {
  const { usd, eur } = useAppSelector(selectCurrency)
  const fetchCurrency = useCurrency()

  useEffect(() => {
    fetchCurrency()
  }, [fetchCurrency])

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