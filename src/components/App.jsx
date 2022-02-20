import Clock from './Clock/Clock';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
import Form from './Form/Form';
import Videos from './VideoList/Videos';
import Pokemon from './Pokemon/Pokemon';
import { Switch, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/pokemon">
          <section className="Container">
            <h2>POKEMONS</h2>
            <Pokemon />
          </section>
        </Route>

        <Route path="/videos" component={Videos} />

        <Route path="/colors">
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
          </section>
        </Route>

        <Route path="/">
          <section className="Container">
            <Clock />
          </section>
          <section className="Container">
            <Form />
          </section>
          <section className="Container">
            <Counter />
          </section>
        </Route>

        {/* <Route>
          <p>Oooooooooooooooooops! 404 ERROR: page not found</p>
        </Route> */}
      </Switch>
    </>
  );
};
