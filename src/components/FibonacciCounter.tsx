import { useState } from 'react';

const FibonacciCounter = () => {
  const [count, setCount] = useState<number>(0);
  const [prev, setPrev] = useState<number>(0);

  // Fungsi untuk menghitung angka Fibonacci berikutnya tanpa array hard-coded
  const getNextFibonacci = () => {
    if (count === 0) {
      setCount(1);
      setPrev(0);
    } else if (count === 1 && prev === 0) {
      setCount(1);
      setPrev(1);
    } else {
      const nextNum = count + prev;
      setPrev(count);
      setCount(nextNum);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', border: '1px solid #ccc' }}>
      <h1>Klik Tombol Fibonacci Counter</h1>
      <h2 style={{ fontSize: '48px' }}>{count}</h2>
      <button 
        onClick={getNextFibonacci}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        TOMBOL Angka Fibonacci
      </button>
    </div>
  );
};

export default FibonacciCounter;