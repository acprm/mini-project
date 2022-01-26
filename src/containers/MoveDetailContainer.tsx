import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RootState} from '../redux/store';

import {fetchPokemon, PokemonState} from '../redux/reducers/pokemonSlice';
import {fetchMoves, MovesState} from '../redux/reducers/movesSlice';

import TabContainer from './TabContainer'
import Tab from '../components/common/Tab'
import PokeMoveType from '../components/common/PokeMoveType'
import List from '../components/common/List'
import Fallback from '../components/common/Fallback'

import {PathParamsType} from '../type'
import {appName} from '../helpers/baseContents';

type Props = RouteComponentProps<PathParamsType> & {
    pokemon: PokemonState;
    moves: MovesState;
    fetchPokemon: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void;
    fetchMoves: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void;
}

interface MoveDetailState {
    activeTab: number;
}

class MoveDetailContainer extends React.Component<Props, MoveDetailState> {
    state = {activeTab: 1}

    componentDidMount() {
        // use this to log param 
        (async () => {
            const idParam = +this.props.match.params.id
            await this.props.fetchMoves({id: idParam})
            await this.props.fetchPokemon({id: this.props.moves.list[0].pokemon})
        })()
        document.title = `${appName} - Move`
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.callApi()
        }
    }

    async callApi() {
        const idParam = +this.props.match.params.id
        await this.props.fetchMoves({id: idParam})
        await this.props.fetchPokemon({id: this.props.moves.list[0].pokemon})
    }

    renderMove() {
        return (
            <div className='p-5 flex flex-col'>
                <div>
                    <div className='text-4xl font-semibold'>{this.props.moves.list[0].name}</div>
                    <div className='text-lg text-dark-gray'>Move</div>
                    <div className='my-5'>
                        <PokeMoveType id={this.props.moves.list[0].type}/>
                    </div>
                </div>
            </div>
        )
    }

    renderDetail() {
        return (
            <>
                <div className='font-semibold'>Short Description</div>
                <div>{this.props.moves.list[0].shortDescription}</div>
                <div className='font-semibold mt-5'>Description</div>
                <div>{this.props.moves.list[0].longDescription}</div>
                <hr className='my-3'/>
                <div className='font-semibold'>Stats</div>
                <div className='grid grid-cols-2'>
                    {/* acc */}
                    <div>Accuracy</div>
                    <div className='font-semibold'>{this.props.moves.list[0].accuracy}</div>

                    {/* power */}
                    <div>Power</div>
                    <div className='font-semibold'>{this.props.moves.list[0].power}</div>

                    {/* pp */}
                    <div>PP</div>
                    <div className='font-semibold'>{this.props.moves.list[0].pp}</div>
                </div>
            </>
        )
    }

    renderPokemon() {
        return this.props.pokemon.list && this.props.pokemon.list.map((item) =>
            (
                <div key={item.id}>
                    <hr className='my-4'/>
                    <List item={item.name} types={item.types} imgUrl={item.sprite} category='pokemon' id={item.id}/>
                </div>
            )
        )
    }

    handleOnTabClick(e: number) {
        this.setState({activeTab: e})
    }

    render() {
        if (this.props.moves.status === 'loading') {
            return <Fallback/>
        } else if (this.props.moves.status === 'failed') return <Redirect to='/404'/>
        else if (this.props.moves.list[0]) return (
            <div className='flex flex-col gap-5'>
                {this.renderMove()}
                <TabContainer large={true}>
                    <div className='flex justify-center content-center items-center gap-8'>
                        <Tab name='Detail' active={this.state.activeTab === 1}
                             onClick={() => this.handleOnTabClick(1)}/>
                        <Tab name='Pokemon' active={this.state.activeTab === 2}
                             onClick={() => this.handleOnTabClick(2)}/>
                    </div>

                    {/* Details */}
                    <div
                        className={`${this.state.activeTab !== 1 ? 'hidden' : 'inline-block'} overflow-y-auto flex flex-col text-lg`}>
                        {this.renderDetail()}
                    </div>

                    {/* Pokemons */}
                    <div className={`${this.state.activeTab !== 2 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {this.renderPokemon()}
                    </div>
                </TabContainer>
            </div>
        );
        else return null
    }
}

const mapStateToProps = (state: RootState) => ({
    pokemon: state.pokemon,
    moves: state.moves
})

export default connect(mapStateToProps, {fetchMoves, fetchPokemon})(withRouter(MoveDetailContainer));