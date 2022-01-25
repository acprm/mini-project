import React from "react";
import {RootState} from '../redux/store'
import {connect} from 'react-redux'
import {favorites} from "../helpers/local";
import PokemonCard from '../components/pokemon/PokemonCard'
import {fetchPokemon, PokemonState} from "../redux/reducers/pokemonSlice";
import { appName } from "../helpers/baseContents";


interface HomeProps {
    pokemon: PokemonState,
    fetchPokemon: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void
}

interface HomeState {
    favs: Array<number>
}

class HomeContainer extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        const lsData = favorites();
        if (lsData) {
            this.state = {favs: JSON.parse(lsData)}
        } else {
            this.state = {favs: []}
        }

    }

    componentDidMount(): void {
        this.props.fetchPokemon({id: 1, lastId: 24})
        document.title = `${appName} - Home`
    }

    checkIfFavorite(id: number): boolean {
        return this.state.favs.filter(item => id === item).length > 0;
    }

    handleHeartClick(id: number, favorite: boolean) {
        if (!favorite) {
            const newFavs = [...this.state.favs, id]
            this.setState({favs: newFavs});
            localStorage.setItem('favorites', JSON.stringify(newFavs))
        } else if (favorite) {
            const newFavs = this.state.favs.filter(item => item !== id)
            this.setState({favs: newFavs})
            localStorage.setItem('favorites', JSON.stringify(newFavs))
        }
    }

    render(): React.ReactNode {
        const pokemonList = this.props.pokemon.list;

        const renderPokemon = () => pokemonList && pokemonList.map((item) => {
                const fav = this.checkIfFavorite(item.id)
                return (
                    <PokemonCard
                        key={item.id}
                        pokeName={item.name}
                        imgUrl={item.sprite}
                        url={item.sprite}
                        favorite={fav}
                        pokeTypes={item.types}
                        onHeartClick={() => this.handleHeartClick(item.id, fav)}
                        id={item.id}
                    />
                )
            }
        )

        return(
            <div className="flex flex-col items-center justify-center pt-5">
                <div className="font-semibold text-4xl mb-5">Pokemon</div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5">
                    {renderPokemon()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state: RootState) => ({
    pokemon: state.pokemon,
})

export default connect(mapStateToProps, {fetchPokemon})(HomeContainer);