import React from "react";
import { useState } from "react";

import { Detail, PokemonDetail, PokemonState } from "../interface";
import PokemonList from "./PokemonList";

interface props {
  pokemons: PokemonDetail[];
}

const PokemonColection: React.FC<props> = (props) => {
  const { pokemons } = props;
  const [detailPoke, setDetailPoke] = useState<Detail>({
    id: 0,
    isOpen: false,
  });

  // console.log("check props: ", pokemons);

  const handleDetail = (id: number) => {
    if (!detailPoke.isOpen) {
      setDetailPoke({
        id: id,
        isOpen: true,
      });
    }
  };
  return (
    <div>
      <section
        className={
          detailPoke.isOpen
            ? "collection-container-active"
            : "collection-container"
        }
      >
        {detailPoke.isOpen ? (
          <div className="overlay"></div>
        ) : (
          <div className=""></div>
        )}
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id} onClick={() => handleDetail(pokemon.id)}>
              <PokemonList
                name={pokemon.name}
                detailPoke={detailPoke}
                setDetailPoke={setDetailPoke}
                id={pokemon.id}
                abilities={pokemon.abilities}
                image={pokemon.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PokemonColection;
