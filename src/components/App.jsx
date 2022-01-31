import Clock from './Clock/Clock';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
import Form from './Form/Form';
import Videos from './VideoList/Videos';
import Pokemon from './Pokemon/Pokemon';

export const App = () => {
  return (
    <>
      <section className="Container">
        <h2>POKEMONS</h2>
        <Pokemon />{' '}
      </section>
      <section className="Container">
        <Videos />
      </section>
      <section className="Container">
        <Clock />
      </section>
      <section className="Container">
        <Form />
      </section>
      <section className="Container">
        <ColorPicker
          options={[
            { value: '#ff0000', label: 'red' },
            { value: '#ff8000', label: 'orange' },
            { value: '#ffff00', label: 'yellow' },
            { value: '#80ff00', label: 'chartreuse' },
            { value: '#0080ff', label: 'dodger blue' },
            { value: '#8000ff', label: 'purple' },
          ]}
        />
      </section>{' '}
      <section className="Container">
        <Counter step={3} />
      </section>
    </>
  );
};
