import { useState } from 'react';
import PokemonForm from './PokemonForm';
import PokemonInfo from './PokemonInfo';

export default function Pokemon() {
  const [pokemon, setPokemon] = useState('');

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 16 }}>
      <PokemonForm formSubmit={setPokemon} />
      <PokemonInfo pokemonName={pokemon} />
    </div>
  );
}
