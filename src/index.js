import React from 'react';
import { render } from 'react-dom';

import Counter from './Counter';
import CountHook from './Counter-Hook';

import './styles.scss';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter max={20} step={2} />
      </section>
      <section className="Counters">
        <CountHook />
      </section>
    </main>
  );
};

render(<Application />, document.getElementById('root'));
