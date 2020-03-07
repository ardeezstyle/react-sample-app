import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: this.props.ctr
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onDeleteCounter}  />

                <button onClick={this.props.onShowResults}>Show Results</button>
                <ul>
                  {this.props.storedResults.map(storeResult =>
                    <li key={storeResult.id} onClick={() => this.props.onDeleteResult(storeResult.id)}>{storeResult.value}</li>
                  )}
                </ul>
            </div>
        );
    }
}

const mapStatesToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAddCounter: () => dispatch({type: 'ADD_COUNTER', payload: 10}),
    onDeleteCounter: () => dispatch({type: 'DELETE_COUNTER', payload: 5}),
    onShowResults: () => dispatch({type: 'STORE_RESULTS'}),
    onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', payload: id})
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(Counter);
