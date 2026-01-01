import { useLayoutEffect, useRef, useState } from "react";

export default function LayoutEffectExample() {
  const boxRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  
  useLayoutEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      setHeight(rect.height);
      setWidth(rect.width);
      console.log("useLayoutEffect - pomiar przed repaint");
    }
  }, []);
  
  return (
    <div>
      <div 
        ref={boxRef} 
        style={{ 
          padding: "50px", 
          background: "#ddd",
          borderRadius: "8px",
          textAlign: "center"
        }}
      >
        Mierzę swoją wysokość i szerokość!
      </div>
      <p>Wysokość: <strong>{height.toFixed(2)}px</strong></p>
      <p>Szerokość: <strong>{width.toFixed(2)}px</strong></p>
      <p style={{fontSize: '12px', color: '#666'}}>
        (useLayoutEffect wykonuje się przed repaint - synchronicznie)
      </p>
    </div>
  );
}
