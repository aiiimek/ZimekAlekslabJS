import { useMemo, useState } from "react";

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export default function PrimeCalculator() {
  const [number, setNumber] = useState(1000);
  
  const primeCount = useMemo(() => {
    console.log("Przeliczam liczby pierwsze...");
    let count = 0;
    for (let i = 2; i < number; i++) {
      if (isPrime(i)) count++;
    }
    return count;
  }, [number]);
  
  return (
    <div>
      <label>
        Sprawdź liczby pierwsze mniejsze niż: 
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          style={{marginLeft: '10px', padding: '5px'}}
        />
      </label>
      <p>Liczb pierwszych: <strong>{primeCount}</strong></p>
      <p style={{fontSize: '12px', color: '#666'}}>
        (useMemo zapobiega niepotrzebnemu przeliczaniu przy każdym renderze)
      </p>
    </div>
  );
}
