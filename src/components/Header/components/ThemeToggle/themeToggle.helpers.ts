export const themeByDefault = () => {
  const theme = localStorage.getItem('theme')
  return theme === 'dark'
}