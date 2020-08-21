import React, { Component } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  console.log(storage);
  if (storage) {
    const value = JSON.parse(storage);
    console.log('value', value);
    return value;
  }
  return { count: 0 };
};

const storeStateToLocalStorage = (state) => {
  localStorage.setItem('counterState', JSON.stringify(state));
  console.log(localStorage);
}

const updateDocumentTitle = (state) => {
  document.title = `count: ${state.count}`
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = getStateFromLocalStorage();

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment() {
    // this.setState({ count: this.state.count + 1 })
    this.setState((state, props) => { 
      const { max, step } = props
      if (state.count >= max) {
        return
      }
      return {
        count: state.count + step
      }
    }, () => { 
      storeStateToLocalStorage(this.state);
      updateDocumentTitle(this.state);
    })
  }

  decrement() {
    this.setState((state, props) => { 
      return { 
        count: state.count - props.step 
      }
    }, () => { 
      storeStateToLocalStorage(this.state);
      updateDocumentTitle(this.state);
    })
  }

  reset() {
    this.setState(() => ({ count: 0 }), 
      () => { 
        storeStateToLocalStorage({ count: 0 });
        updateDocumentTitle(this.state);
      })
  }

  render() {
    const { count } = this.state;
    console.log('count', count);
    return (
      <div className="Counter">
        <p className="count">{ count }</p>
        <section className="controls">
          <button onClick={ this.increment }>Increment</button>
          <button onClick={ this.decrement }>Decrement</button>
          <button onClick={ this.reset }>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
