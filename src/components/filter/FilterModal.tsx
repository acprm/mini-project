import React, {Component} from "react";
import {MdClose} from "react-icons/md";
import {RootState} from "../../redux/store";
import {connect} from "react-redux";
import {fetchPokemon, PokemonGen, changeGeneration, PokemonState, Page} from "../../redux/reducers/pokemonSlice";
import {ModalsState, closeFilter} from "../../redux/reducers/modalsSlice";

interface FilterModalProps {
    pokemon: PokemonState
    modals: ModalsState
    page: Page
    changeGeneration: (generation: PokemonGen) => void
    fetchPokemon: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void
    closeFilter: () => void
}

class FilterModal extends Component<FilterModalProps> {
    generationList = [
        {id: 1, generation: "I"},
        {id: 2, generation: "II"},
        {id: 3, generation: "III"},
        {id: 4, generation: "IV"},
        {id: 5, generation: "V"},
        {id: 6, generation: "VI"},
        {id: 7, generation: "VII"},
        {id: 8, generation: "VIII"},
    ]

    handleClick = (generation: PokemonGen) => {
        const {firstId, lastId, limit} = this.props.page
        this.props.changeGeneration(generation)
        this.props.closeFilter()
        // this.props.fetchPokemon({id: firstId, lastId, limit})
    }

    render() {
        return (
            <div className="mx-auto bg-white p-6 rounded-xl shadow-lg">
                <div className="flex flex-col items-center justify-center ">
                    <div className="flex justify-between items-end py-5 w-[25rem]">
                        <span className="font-semibold text-4xl">Filter</span>
                        <MdClose
                            onClick={() => this.props.closeFilter()}
                            className="text-main-red text-2xl cursor-pointer hover:text-black duration-300"
                        />
                    </div>
                    <div className="w-[25rem]">
                        <hr/>
                        {this.generationList.map(({id, generation}) => (
                            <div
                                key={id}
                                className="hover:bg-light-gray cursor-pointer"
                                onClick={() => this.handleClick(generation as PokemonGen)}
                            >
                                <div className="py-2">
                                    <span className="text-md">Generation {generation}</span>
                                </div>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    pokemon: state.pokemon,
    page: state.pokemon.page,
    modals: state.modals,
})

export default connect(mapStateToProps, {fetchPokemon, changeGeneration, closeFilter})(FilterModal);