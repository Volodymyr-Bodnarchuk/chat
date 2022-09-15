import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className=''>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className='text-3xl font-bold text-blue-600'
      >
        Count: {count}
      </button>
    </div>
  );
};

export { Counter };
