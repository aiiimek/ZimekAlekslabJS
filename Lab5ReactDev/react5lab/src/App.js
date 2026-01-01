import './App.css';
import Hello from './Hello';
import HelloWithProps from './HelloWithProps';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';

function App() {
  const todoItems = ['Zrobić zakupy', 'Ukończyć laboratorium', 'Przeczytać książkę', 'Ćwiczyć React'];
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Laboratorium 5 - React</h1>
        
        {/* Ćwiczenie 1: Twój pierwszy komponent */}
        <section>
          <h2>Ćwiczenie 1: Twój pierwszy komponent</h2>
          <Hello />
        </section>

        {/* Ćwiczenie 2: Używanie props */}
        <section>
          <h2>Ćwiczenie 2: Używanie props</h2>
          <HelloWithProps name="Anna" />
          <HelloWithProps name="Bartek" />
          <HelloWithProps name="Celina" />
        </section>

        {/* Ćwiczenie 3: State i useState */}
        <section>
          <h2>Ćwiczenie 3: State i useState</h2>
          <Counter />
        </section>

        {/* Ćwiczenie 4: Obsługa zdarzeń */}
        <section>
          <h2>Ćwiczenie 4: Obsługa zdarzeń</h2>
          <InputTracker />
        </section>

        {/* Ćwiczenie 5: Renderowanie warunkowe */}
        <section>
          <h2>Ćwiczenie 5: Renderowanie warunkowe</h2>
          <h3>Zalogowany:</h3>
          <LoginStatus isLoggedIn={true} />
          <h3>Niezalogowany:</h3>
          <LoginStatus isLoggedIn={false} />
        </section>

        {/* Ćwiczenie 6: Pętle w JSX */}
        <section>
          <h2>Ćwiczenie 6: Pętle w JSX</h2>
          <TodoList todos={todoItems} />
        </section>

        {/* Ćwiczenie 7: Formularz */}
        <section>
          <h2>Ćwiczenie 7: Formularz</h2>
          <LoginForm />
        </section>
      </header>
    </div>
  );
}

export default App;
