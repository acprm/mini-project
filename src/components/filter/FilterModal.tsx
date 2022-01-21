import React, {Component} from "react";
import {MdClose} from "react-icons/md";
import {RootState} from "../../redux/store";
import {connect} from "react-redux";
import {fetchPokemon, PokemonState} from "../../redux/reducers/pokemonSlice";
import {ModalsState, closeFilter} from "../../redux/reducers/modalsSlice";

interface FilterModalProps {
    pokemon: PokemonState,
    modals: ModalsState
    fetchPokemon: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void
    closeFilter: () => void
}

class FilterModal extends Component<FilterModalProps> {
    generationList = [
        {id: 1, name: "Generation I", firstId: 1, lastId: 151},
        {id: 2, name: "Generation II", firstId: 152, lastId: 251},
        {id: 3, name: "Generation III", firstId: 252, lastId: 386},
        {id: 4, name: "Generation IV", firstId: 387, lastId: 493},
        {id: 5, name: "Generation V", firstId: 494, lastId: 649},
        {id: 6, name: "Generation VI", firstId: 650, lastId: 721},
        {id: 7, name: "Generation VII", firstId: 722, lastId: 809},
        {id: 8, name: "Generation VIII", firstId: 810, lastId: 898},
    ]

    handleClick = (firstId: number, lastId: number) => {
        this.props.closeFilter()
        this.props.fetchPokemon({id: firstId, lastId: lastId, limit: 24})
    }

    render() {
        return (
            <div className="mx-auto bg-white p-6 rounded-xl shadow-lg">
                <div className="flex flex-col items-center justify-center " >
                    <div className="flex justify-between items-end py-5 w-[25rem]">
                        <span className="font-semibold text-4xl">Filter</span>
                        <MdClose
                            onClick={() => this.props.closeFilter()}
                            className="text-main-red text-2xl cursor-pointer hover:text-black duration-300"
                        />
                    </div>
                    <div className="w-[25rem]">
                        <hr/>
                        {this.generationList.map(({id, name, firstId, lastId}) => (
                            <div
                                key={id}
                                className="hover:bg-light-gray cursor-pointer"
                                onClick={() => this.handleClick(firstId, lastId)}
                            >
                                <div className="py-2">
                                    <span className="text-md">{name}</span>
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
    modals: state.modals,
})

export default connect(mapStateToProps, {fetchPokemon, closeFilter})(FilterModal);