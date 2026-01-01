import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Laboratorium 6 - React</h1>
        
        {/* Ćwiczenie 1: Warunkowe renderowanie komponentu */}
        <section>
          <h2>Ćwiczenie 1: Warunkowe renderowanie</h2>
          <ToggleDetails />
        </section>

        {/* Ćwiczenie 2: Warunkowe przypisanie komponentu do zmiennej */}
        <section>
          <h2>Ćwiczenie 2: Wyświetlanie wyniku</h2>
          <h3>Wynik: 30 punktów</h3>
          <ScoreDisplay score={30} />
          <h3>Wynik: 65 punktów</h3>
          <ScoreDisplay score={65} />
          <h3>Wynik: 95 punktów</h3>
          <ScoreDisplay score={95} />
        </section>

        {/* Ćwiczenie 3: Lista z dynamicznym filtrowaniem */}
        <section>
          <h2>Ćwiczenie 3: Lista z filtrowaniem</h2>
          <TaskList />
        </section>

        {/* Ćwiczenie 4: useEffect i zewnętrzne dane */}
        <section>
          <h2>Ćwiczenie 4: Pobieranie danych z API</h2>
          <UserList />
        </section>

        {/* Ćwiczenie 5: Licznik z efektami ubocznymi */}
        <section>
          <h2>Ćwiczenie 5: Licznik automatyczny</h2>
          <TimerCounter />
        </section>
      </header>
    </div>
  );
}

export default App;
