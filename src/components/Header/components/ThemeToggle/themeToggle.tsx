import { FC, useState } from "react";
import { THEME } from "../../../../helpers/constants";
import { themeByDefault } from "./themeToggle.helpers";
import DayNightToggle from 'react-day-and-night-toggle';
import { useAppDispatch } from "../../../../redux/store";
import { setTheme } from "../../../../redux/slices/themeSlice";

export const ThemeToggle: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(themeByDefault())
  const dispatch = useAppDispatch()

  const themeHandler = () => {
    if (isDarkMode) {
      localStorage.setItem('theme', THEME.LIGHT)
      dispatch(setTheme(THEME.LIGHT))
      setIsDarkMode(false)

    } else {
      localStorage.setItem('theme', THEME.DARK)
      dispatch(setTheme(THEME.DARK))
      setIsDarkMode(true)
    }
  }

  return <DayNightToggle
    onChange={themeHandler}
    checked={isDarkMode}
  />
}
