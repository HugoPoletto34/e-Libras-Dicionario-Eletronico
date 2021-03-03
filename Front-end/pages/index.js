import React, { useState } from 'react';

export default function Home() {
  const [num, setNum] = useState(2);

  return (
    <>
      <div>
        <p>Hello, World!</p>
        <p>{`contador ${num}`}</p>

        <button
          type="button"
          onClick={() => setNum(num + 2)}
        >
          aperta
        </button>
      </div>

    </>
  );
}
