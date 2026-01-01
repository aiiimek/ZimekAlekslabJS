import { useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();
  
  return (
    <div 
      style={{ 
        background: dark ? "#333" : "#fff", 
        color: dark ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "8px",
        transition: "all 0.3s ease"
      }}
    >
      <h3>Przykład motywu: {dark ? "Ciemny" : "Jasny"}</h3>
      <p>Ten komponent używa useContext do zarządzania motywem.</p>
      <button onClick={toggleTheme} style={{padding: '10px 20px', cursor: 'pointer'}}>
        Przełącz motyw
      </button>
    </div>
  );
}

export default ThemeSwitcher;
