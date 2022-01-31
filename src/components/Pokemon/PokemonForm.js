import { useState } from 'react';
import { ImSearch } from 'react-icons/im';

const styles = { form: { marginBottom: 20 } };

export default function PokemonForm({ formSubmit }) {
  const [pokemonName, setPokemon] = useState('');

  const handleNameChange = event => {
    setPokemon(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (pokemonName.trim() === '') {
      alert('Oooooooops, wrong name..');
      return;
    }
    formSubmit(pokemonName);
    setPokemon('');
  };

  return (
    <form onSubmit={handleSubmit} styles={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
        placeholder="pikachu"
        style={{ padding: 8 }}
      />
      <button type="submit">
        Find Pokemon
        <ImSearch style={{ marginLeft: 8 }} />
      </button>
    </form>
  );
}
