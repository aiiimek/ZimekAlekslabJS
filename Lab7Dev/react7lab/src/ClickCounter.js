import { useRef } from "react";

export default function ClickCounter() {
  const clickCount = useRef(0);
  
  const handleClick = () => {
    clickCount.current++;
    console.log("Kliknięć:", clickCount.current);
    alert(`Liczba kliknięć: ${clickCount.current}`);
  };
  
  return (
    <div>
      <button onClick={handleClick}>Kliknij mnie</button>
      <p style={{fontSize: '12px', color: '#666'}}>
        (Sprawdź konsolę - licznik nie powoduje re-renderu)
      </p>
    </div>
  );
}
