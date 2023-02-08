import React, { useEffect, useState } from "react";
import "./poke.css";
import { Detail } from "../interface";

interface props {
  detailPoke: Detail;
  setDetailPoke: React.Dispatch<React.SetStateAction<Detail>>;
  name: string;
  id: number;
  image: string;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
}

const PokemonList: React.FC<props> = (props) => {
  const { name, id, image, abilities, detailPoke, setDetailPoke } = props;

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(id === detailPoke?.id);
  }, [detailPoke]);

  const handleClose = () => {
    setDetailPoke({
      id: 0,
      isOpen: false,
    });
  };
  return (
    <div className="">
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={handleClose}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt="" className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-ability">Ability: </p>
              {abilities?.map((ab: any) => {
                return <div className="">{ab.ability.name}</div>;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="image" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
