import { getCurrency } from "../api/currency"
import { useAppDispatch } from '../redux/store';
import { CURRENCY_CODE } from "../helpers/constants";
import { setEur, setUsd } from '../redux/slices/currencySlice';

export const useCurrency = () => {
  const dispatch = useAppDispatch()

  return async () => {
    const allCorrency = await getCurrency()

    const usdObject = allCorrency.find((item: any) => item.currencyCodeA === CURRENCY_CODE.USD)
    const eurObject = allCorrency.find((item: any) => item.currencyCodeA === CURRENCY_CODE.EUR)

    const usd = Number(usdObject.rateSell).toFixed(1).toString()
    const eur = Number(eurObject.rateSell).toFixed(1).toString()

    dispatch(setUsd(usd))
    dispatch(setEur(eur))
  }
}
