import './App.css';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from './ThemeContext';
import LayoutEffectExample from './LayoutEffectExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Laboratorium 7 - React Hooks</h1>
        
        {/* Ćwiczenie 1: useRef */}
        <section style={{marginBottom: '40px'}}>
          <h2>Ćwiczenie 1: useRef - licznik bez re-renderu</h2>
          <ClickCounter />
        </section>

        {/* Ćwiczenie 2: useMemo */}
        <section style={{marginBottom: '40px'}}>
          <h2>Ćwiczenie 2: useMemo - optymalizacja obliczeń</h2>
          <PrimeCalculator />
        </section>

        {/* Ćwiczenie 3: useReducer */}
        <section style={{marginBottom: '40px'}}>
          <h2>Ćwiczenie 3: useReducer - zarządzanie formularzem</h2>
          <FormReducer />
        </section>

        {/* Ćwiczenie 4: useContext */}
        <section style={{marginBottom: '40px'}}>
          <h2>Ćwiczenie 4: useContext - motyw aplikacji</h2>
          <ThemeProvider>
            <ThemeSwitcher />
          </ThemeProvider>
        </section>

        {/* Ćwiczenie 5: useLayoutEffect */}
        <section style={{marginBottom: '40px'}}>
          <h2>Ćwiczenie 5: useLayoutEffect - pomiar elementu</h2>
          <LayoutEffectExample />
        </section>
      </header>
    </div>
  );
}

export default App;
