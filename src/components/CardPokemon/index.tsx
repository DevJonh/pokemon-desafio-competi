import { MdAdd, MdVisibility } from "react-icons/md";
import { useAuth } from "../../store/useAuth";
import { usePokemon } from "../../store/usePokemon";
import Pagination from "../Pagination";
import * as Styles from "./styles";

const CardPokemon = () => {
  const { Pokemons, search, pokemonsSearch, setPokemonDetails } = usePokemon();
  const { userLogged, AddPokemon } = useAuth();

  const addPokemon = (id: number) => {
    if (!userLogged) {
      alert("Realize um Login para adicionar um Pokémon! ;)");
    } else {
      AddPokemon(Pokemons, id);
    }
  };

  return (
    <Styles.Container>
      {pokemonsSearch ? (
        <Styles.ContainerImage key={pokemonsSearch.id}>
          <Styles.Details>
            <button onClick={() => setPokemonDetails(pokemonsSearch.id)}>
              <MdVisibility size={"1.5rem"} color={"#fff"} />
            </button>
            <button onClick={() => addPokemon(pokemonsSearch.id)}>
              <MdAdd size={"1.5rem"} color={"#fff"} />
            </button>
          </Styles.Details>
          <img
            src={pokemonsSearch.sprites.front_default}
            alt={`Foto de ${pokemonsSearch.name}`}
          />
          <Styles.Index gallery={false}>
            <span>{pokemonsSearch.id}</span>
          </Styles.Index>
          <Styles.Type
            color={pokemonsSearch.types[0].color}
            text={pokemonsSearch.types[0].text}
            gallery={false}
          >
            {search === "Selecione o tipo"
              ? pokemonsSearch.types[0].type.name.charAt(0).toUpperCase() +
                pokemonsSearch.types[0].type.name.slice(1)
              : search.charAt(0).toUpperCase() + search.slice(1)}
          </Styles.Type>
          <p>
            {pokemonsSearch.name.charAt(0).toUpperCase() +
              pokemonsSearch.name.slice(1)}
          </p>
        </Styles.ContainerImage>
      ) : (
        Pokemons.map(({ id, sprites, types, name }) => (
          <Styles.ContainerImage key={id}>
            <Styles.Details>
              <button onClick={() => setPokemonDetails(id)}>
                <MdVisibility size={"1.5rem"} color={"#fff"} />
              </button>
              <button>
                <MdAdd
                  onClick={() => addPokemon(id)}
                  size={"1.5rem"}
                  color={"#fff"}
                />
              </button>
            </Styles.Details>
            <img src={sprites.front_default} alt="" />
            <Styles.Index gallery={false}>
              <span>{id}</span>
            </Styles.Index>
            <Styles.Type
              color={types[0].color}
              text={types[0].text}
              gallery={false}
            >
              {search === "Selecione o tipo"
                ? types[0].type.name.charAt(0).toUpperCase() +
                  types[0].type.name.slice(1)
                : search.charAt(0).toUpperCase() + search.slice(1)}
            </Styles.Type>
            <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
          </Styles.ContainerImage>
        ))
      )}
      <Pagination />
    </Styles.Container>
  );
};

export default CardPokemon;
