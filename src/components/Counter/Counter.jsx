"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="text-center mt-12">
      <p className="mb-12">Count: {counter}</p>
      <button
        className="btn btn-secondary"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        Secondary
      </button>
      <button
        className="btn btn-accent"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        Accent
      </button>
    </div>
  );
};

export default Counter;
