"use client";

import { useCounter } from "@packages/core";
import { Button } from "@packages/ui";

function TMSCounter() {
  const { count, increment, decrement } = useCounter();
  console.log(count);
  return (
    <div>
      <h1 style={{ fontSize: "30px" }}>Counter</h1>
      <h4>{count}</h4>
      <Button onClick={increment}>UP</Button>
      <Button variant="secondary" onClick={decrement}>
        DOWN
      </Button>
    </div>
  );
}

export default TMSCounter;
