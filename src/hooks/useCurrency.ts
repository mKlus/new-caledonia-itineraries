import { useLocalStorage } from './useLocalStorage';

export type CurrencyMode = 'both' | 'aud' | 'xpf';

export function useCurrency() {
  const [exchangeRate, setExchangeRate] = useLocalStorage<number>('nc_currency_rate', 73);
  const [currencyMode, setCurrencyMode] = useLocalStorage<CurrencyMode>('nc_currency_mode', 'both');

  const formatCost = (xpf: number, audOverride?: number): string => {
    const rate = exchangeRate > 0 ? exchangeRate : 73;
    const computedAud = audOverride !== undefined ? audOverride : Math.round(xpf / rate);

    if (currencyMode === 'aud') {
      return `~$${computedAud.toLocaleString()} AUD`;
    }
    if (currencyMode === 'xpf') {
      return `${xpf.toLocaleString()} XPF`;
    }
    return `${xpf.toLocaleString()} XPF (~$${computedAud.toLocaleString()} AUD)`;
  };

  return {
    exchangeRate,
    setExchangeRate,
    currencyMode,
    setCurrencyMode,
    formatCost
  };
}
