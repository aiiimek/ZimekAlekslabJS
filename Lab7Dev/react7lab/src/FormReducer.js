import { useReducer } from "react";

const initialState = { name: "", email: "" };

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function FormReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <form>
        <div style={{marginBottom: '10px'}}>
          <input
            value={state.name}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
            placeholder="Imię"
            style={{padding: '5px', marginRight: '10px'}}
          />
        </div>
        <div style={{marginBottom: '10px'}}>
          <input
            value={state.email}
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
            placeholder="Email"
            style={{padding: '5px', marginRight: '10px'}}
          />
        </div>
        <button 
          type="button" 
          onClick={() => dispatch({ type: "RESET" })}
          style={{padding: '5px 15px'}}
        >
          Wyczyść
        </button>
      </form>
      <p>Stan formularza: <code>{JSON.stringify(state)}</code></p>
    </div>
  );
}
