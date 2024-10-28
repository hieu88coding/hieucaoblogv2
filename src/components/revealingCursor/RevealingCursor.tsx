import { useState, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

  const updateMousePosition = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
