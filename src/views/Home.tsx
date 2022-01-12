import PokemonCard from "../components/PokemonCard";

const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
export default function Home(){
    return(
        <PokemonCard pokeName="Charizard" pokeTypes={["fire","flying"]} url={url} />
    )
}