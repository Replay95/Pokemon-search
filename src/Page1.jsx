import { useEffect, useState } from "react";
import "./App.css";
import { useSearchParams } from "react-router-dom";

async function getPokemonDate(inputfield) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputfield}`);
  const resBody = await res.json();
  return resBody;
}

export function Page1() {
  const [searchParams] = useSearchParams();
  const inputfield = searchParams.get("inputfield");
  const [pokemonImage, setPokemonImage] = useState();
  const [pokemonName, setPokemonName] = useState();

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await getPokemonDate(inputfield);
      setPokemonName(pokemon.species.name);
      setPokemonImage(pokemon.sprites.front_default);
    }
    getPokemon(inputfield);
  }, [inputfield]);

  return (
    <>
      <h1>{pokemonName}</h1>
      <img src={pokemonImage} width={300} height={300} />
    </>
  );
}
