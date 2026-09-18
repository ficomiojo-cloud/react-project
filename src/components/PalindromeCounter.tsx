import { useState } from 'react';

const PalindromeCounter = () => {
  const [count, setCount] = useState<number>(0);

  const isPalindrome = (num: number): boolean => {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };

  const handleClick = () => {
    let nextNum = count + 1;
    while (!isPalindrome(nextNum)) {
      nextNum++;
    }
    setCount(nextNum);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', border: '1px solid #ccc' }}>
      <h1>Palindrome Counter</h1>
      <h2 style={{ fontSize: '48px' }}>{count}</h2>
      <button 
        onClick={handleClick}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Next Palindrome
      </button>
    </div>
  );
};

export default PalindromeCounter;