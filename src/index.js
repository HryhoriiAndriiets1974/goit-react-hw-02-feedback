import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      }
    })
  };


  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      }
    })
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
    <App />
  </React.StrictMode>
);
