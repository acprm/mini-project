import PokemonCard from "../components/PokemonCard";

export default function Home(){
    return(
        <PokemonCard pokeName="Charizard" pokeTypes={["Fire","Flying"]} />
    )
}