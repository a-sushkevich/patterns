const ThemeContext = React.createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
