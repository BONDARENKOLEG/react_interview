import { Main } from './components/main';
import { THEME } from './helpers/constants';
import { useAppSelector } from './redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useSetupTheme } from './hooks/useSetupTheme';
import { lightTheme, darkTheme } from './assets/theme/theme';

export const App = () => {
  const { theme } = useAppSelector(store => store.theme)
  const themeCondition = theme === THEME.DARK ? darkTheme : lightTheme
  useSetupTheme()

  return (
    <ThemeProvider theme={themeCondition}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
}

