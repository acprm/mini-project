import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {connect} from 'react-redux'
import {RootState} from '../redux/store'
import {Redirect} from 'react-router-dom';

import {fetchTypes, TypesState} from '../redux/reducers/typesSlice'
import {fetchPokemon, PokemonState} from '../redux/reducers/pokemonSlice';
import {fetchMoves, MovesState} from '../redux/reducers/movesSlice';

import Tab from '../components/common/Tab'
import PokeMoveType from '../components/common/PokeMoveType'
import List from '../components/common/List'
import TabContainer from './TabContainer'
import {PathParamsType} from '../type'
import {appName} from '../helpers/baseContents';
import Fallback from '../components/common/Fallback';
import NoData from "../components/common/NoData";


type Props = RouteComponentProps<PathParamsType> & {
    types: TypesState;
    pokemon: PokemonState;
    moves: MovesState;
    fetchTypes: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void;
    fetchPokemon: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void;
    fetchMoves: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void;
}

interface TypeDetailState {
    activeTab: number;
}

class TypeDetailContainer extends React.Component<Props, TypeDetailState> {
    state = {activeTab: 1}


    componentDidMount(): void {
        this.callApi()
        document.title = `${appName} - Type`
    }

    componentDidUpdate(prevProps: Props) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.callApi()
        }
    }


    async callApi() {
        const idParam = +this.props.match.params.id
        await this.props.fetchTypes({id: idParam})
        await this.props.fetchMoves({id: this.props.types.list[0].moves})
        await this.props.fetchPokemon({id: this.props.types.list[0].pokemon})
    }

    renderType = () => {
        {
            return (
                <div className='p-5 flex flex-col'>
                    <div>
                        <div className='text-4xl font-semibold'>{this.props.types.list[0].name}</div>
                        <div className='text-lg text-dark-gray'>Type</div>
                        <div className='my-5 h-11'/>
                    </div>
                </div>
            )
        }
    }

    renderOffensive() {
        return (
            <div className='flex flex-col items-center content-center font-semibold gap-5 '>
                <div>Offensive</div>
                <div className='flex flex-col gap-4 items-center'>
                    {this.props.types.list[0].offensive.double.length > 0 && (
                        <>
                            <div>2x Damage</div>
                            {this.props.types.list[0].offensive.double.map((item, idx) => {
                                return (
                                    <PokeMoveType id={item} key={idx}/>
                                )
                            })}
                        </>)}

                    {this.props.types.list[0].offensive.half.length > 0 && (
                        <>
                            <div>1/2x Damage</div>
                            {this.props.types.list[0].offensive.half.map((item, idx) => {
                                return (
                                    <PokeMoveType id={item} key={idx}/>
                                )
                            })}
                        </>
                    )}

                    {this.props.types.list[0].offensive.zero.length > 0 && (
                        <>
                            <div>0 Damage</div>
                            {this.props.types.list[0].offensive.zero.map((item, idx) => {
                                return (
                                    <PokeMoveType id={item} key={idx}/>
                                )
                            })}
                        </>
                    )}
                </div>
            </div>
        )
    }

    renderDefensive() {
        return (
            <div className='flex flex-col items-center content-center font-semibold gap-5 '>

                <div>Defensive</div>
                <div className='flex flex-col gap-4 items-center'>
                    {this.props.types.list[0].defensive.double.length > 0 && (
                        <>
                            <div>2x Damage</div>
                            {this.props.types.list[0].defensive.double.map((item, idx) => {
                                return (
                                    <PokeMoveType id={item} key={idx}/>
                                )
                            })}
                        </>
                    )}

                    {this.props.types.list[0].defensive.half.length > 0 && (
                        <>
                            <div>1/2x Damage</div>
                            {this.props.types.list[0].defensive.half.map((item, idx) => {
                                return (
                                    <PokeMoveType id={item} key={idx}/>
                                )
                            })}
                        </>
                    )}


                    {this.props.types.list[0].defensive.zero.length > 0 && (
                        <>
                            <div>0 Damage</div>
                            {this.props.types.list[0].defensive.zero.map((item, idx) => {
                                return (
                                    <PokeMoveType id={item} key={idx}/>
                                )
                            })}
                        </>
                    )}
                </div>
            </div>
        )
    }

    renderPokemon() {
        if (this.props.pokemon.list.length === 0) return <NoData/>
        return this.props.pokemon.list && this.props.pokemon.list.map((item) =>
            (
                <div key={item.id}>
                    <hr className='my-4'/>
                    <List item={item.name} types={item.types} imgUrl={item.sprite} category='pokemon' id={item.id}/>
                </div>
            )
        )
    }

    renderMoves() {
        if (this.props.moves.list.length === 0) return <NoData/>
        return this.props.moves.list && this.props.moves.list.map((item) =>
            (
                <div key={item.id}>
                    <hr className='my-4'/>
                    <List item={item.name} types={[item.type]} category='move' id={item.id}/>
                </div>
            )
        )
    }


    handleOnTabClick(e: number) {
        this.setState({activeTab: e})
    }

    render(): React.ReactNode {
        if (this.props.types.status === 'loading') {
            return <Fallback/>
        } else if (this.props.types.status === 'failed') return <Redirect to='/404'/>
        else if (this.props.types.list[0]) return (
            <div className='flex flex-col gap-5'>
                {this.renderType()}
                <TabContainer large={true}>
                    <div className='flex justify-center content-center items-center gap-8 '>
                        <Tab name='Dmg. Relation' active={this.state.activeTab === 1}
                             onClick={() => this.handleOnTabClick(1)}/>
                        <Tab name='Pokemon' active={this.state.activeTab === 2}
                             onClick={() => this.handleOnTabClick(2)}/>
                        <Tab name='Move' active={this.state.activeTab === 3} onClick={() => this.handleOnTabClick(3)}/>
                    </div>

                    {/* dmg relation */}

                    <div
                        className={`${this.state.activeTab !== 1 ? 'hidden' : 'inline-block'} flex justify-center gap-5 sm:gap-20 content-center overflow-y-auto`}>

                        {/* offensive */}
                        {this.renderOffensive()}

                        {/* separator */}
                        <div className='h-full w-1 bg-dark-gray bg-opacity-20'/>

                        {/* defensive */}
                        {this.renderDefensive()}
                    </div>

                    {/* pokemon */}
                    <div className={`${this.state.activeTab !== 2 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {this.renderPokemon()}
                    </div>

                    {/* moves */}
                    <div className={`${this.state.activeTab !== 3 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {this.renderMoves()}
                    </div>
                </TabContainer>
            </div>
        );
        else return null;
    }
}

const mapStateToProps = (state: RootState) => ({
    types: state.types,
    pokemon: state.pokemon,
    moves: state.moves
})

export default connect(mapStateToProps, {fetchTypes, fetchPokemon, fetchMoves})(withRouter(TypeDetailContainer));