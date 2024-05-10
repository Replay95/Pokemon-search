import { useEffect, useState } from "react";
import "./App.css";
import { useSearchParams } from "react-router-dom";

async function getPokemonDate(inputfield) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputfield}`);
  const resBody = await res.json();
  return resBody.sprites.front_default;
}

export function Page1() {
  const [searchParams] = useSearchParams();
  const inputfield = searchParams.get("inputfield");
  const [pokemonImage, setPokemonImage] = useState();

  useEffect(() => {
    async function getPokemon() {
      const pokemon = await getPokemonDate(inputfield);
      setPokemonImage(pokemon);
    }
    getPokemon(inputfield);
  }, [inputfield]);

  return (
    <>
      <h1>{inputfield}</h1>
      <img src={pokemonImage} width={300} height={300} />
    </>
  );
}
