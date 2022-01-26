import {Component} from "react";
import {connect, ConnectedProps} from "react-redux";

import {RootState} from "../redux/store";
import {fetchMorePokemon, setNextId} from "../redux/reducers/pokemonSlice";
import {ComponentPropsMin} from "../type";

class ViewMoreButton extends Component<ViewMoreButtonProps> {
    handleClick = () => {
        const {firstId, lastId, nextId, limit} = this.props.page
        let newFirst: number = nextId + limit
        let newLast: number = newFirst - 1

        if (newFirst >= lastId) {
            newFirst = firstId
        }
        if (newLast >= lastId) {
            newLast = lastId
        }

        this.props.setNextId(newFirst)
        console.log(`Page First: ${firstId}\nPage Last: ${lastId}\nNew First: ${nextId} \nNew Last: ${newLast}`)
        this.props.fetchMorePokemon({id: nextId, lastId: newLast})
    }

    hideButton = () => {
        const {lastId} = this.props.page
        return (this.props.pokemon.list.filter(pokemon => pokemon.id === lastId).length > 0)
    }


    render() {
        return (
            <button
                className={`${this.hideButton() && 'hidden'} py-3 px-5 mb-5 font-semibold text-white bg-main-red rounded-full hover:shadow-lg hover:shadow-main-red/50 duration-300 text-xl`}
                onClick={() => this.handleClick()}
            >
                View More
            </button>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    pokemon: state.pokemon,
    page: state.pokemon.page
})

const connector = connect(mapStateToProps, {fetchMorePokemon, setNextId})
type ViewMoreButtonProps = ConnectedProps<typeof connector> & ComponentPropsMin

export default connector(ViewMoreButton)