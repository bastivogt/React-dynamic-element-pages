import { useState } from "react";

export function useRerender() {
  const [render, setRender] = useState({});
  return () => {
    setRender({});
  };
}
