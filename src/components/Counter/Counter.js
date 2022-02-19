import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

function Counter({ value, onIncrement, onDecrement }) {
  return (
    <>
      <div>
        <button type="button" onClick={onDecrement}>
          Decrement
        </button>
        <span>
          <b> {value} </b>
        </span>
        <button type="button" onClick={onIncrement}>
          Increment
        </button>
      </div>
    </>
  );
}

const mapStatetoProps = state => {
  return { value: state.counterValue };
};

const mapDipatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.decrement(5)),
  };
};

export default connect(mapStatetoProps, mapDipatchToProps)(Counter);
