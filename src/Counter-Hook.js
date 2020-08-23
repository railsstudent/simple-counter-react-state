import React, { useState, useEffect } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  console.log(storage);
  if (storage) {
    const value = JSON.parse(storage).count;
    console.log('value', value);
    return value;
  }
  return 0;
};

const storeStateToLocalStorage = (count) => {
  localStorage.setItem('counterState', JSON.stringify({ count }));
  console.log(localStorage);
}

const CounterHook = () => {
    const [count, setCount] = useState(getStateFromLocalStorage());

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    useEffect(() => {
        document.title = `C (Hook): ${count}`;
    }, [count]);

    useEffect(() => {
        storeStateToLocalStorage(count);
    }, [count]);

    return (
        <div className="Counter">
            <p className="count">{ count }</p>
            <section className="controls">
            <button onClick={ increment }>Increment</button>
            <button onClick={ decrement }>Decrement</button>
            <button onClick={ reset }>Reset</button>
            </section>
        </div>
    );
}

export default CounterHook;
