import { useState, useEffect } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import pokemonApi from '../../services/pokemon-api';

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');
    pokemonApi
      .fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <p>Please input Pokemon name</p>;
  }

  if (status === 'pending') {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }

  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
}
