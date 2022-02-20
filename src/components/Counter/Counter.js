import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <>
      <div>
        <button type="button" onClick={() => onDecrement(step)}>
          Decrement by {step}
        </button>
        <span>
          <b> {value} </b>
        </span>
        <button type="button" onClick={() => onIncrement(step)}>
          Increment by {step}
        </button>
      </div>
    </>
  );
}

const mapStatetoProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDipatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStatetoProps, mapDipatchToProps)(Counter);
