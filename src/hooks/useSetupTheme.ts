import { useAppDispatch } from '../redux/store';
import { setTheme } from '../redux/slices/themeSlice';

export const useSetupTheme = () => {
  const dispatch = useAppDispatch()

  const storagedTheme = localStorage.getItem('theme')
  dispatch(setTheme(storagedTheme))
}

