import React from "react";
import {RootState} from '../redux/store'
import {connect} from 'react-redux'
import {favorites} from "../helpers/local";
import PokemonCard from '../components/pokemon/PokemonCard'
import Fallback from "../components/common/Fallback";
import {fetchPokemon, Page, PokemonState} from "../redux/reducers/pokemonSlice";
import { appName } from "../helpers/baseContents";
import ViewMoreButton from "../components/ViewMoreButton";


interface HomeProps {
    pokemon: PokemonState
    page: Page
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
        this.fetchPokemonData()
        document.title = `${appName} - Home`
    }

    componentDidUpdate(prevProps: HomeProps) {
        if (prevProps.page.generation !== this.props.page.generation ) {
            this.fetchPokemonData()
        }
    }

    fetchPokemonData = () => {
        const {firstId, limit} = this.props.page
        const lastId = firstId + limit - 1
        this.props.fetchPokemon({id: firstId, lastId})
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
        if(this.props.pokemon.status === 'loading') return <Fallback/>
        else return(
            <div className="flex flex-col items-center justify-center pt-5">
                <div className="font-semibold text-center text-4xl mb-5">
                    Pokemon <br/>
                    <span className="font-light italic text-dark-gray text-2xl">Generation {this.props.page.generation}</span>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5">
                    {renderPokemon()}
                </div>
                <ViewMoreButton/>
            </div>
        )
    }

}

const mapStateToProps = (state: RootState) => ({
    pokemon: state.pokemon,
    page: state.pokemon.page
})

export default connect(mapStateToProps, {fetchPokemon})(HomeContainer);