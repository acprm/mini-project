import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router'
import {connect} from "react-redux";
import {RootState} from "../redux/store";

import {fetchPokemon, PokemonState} from "../redux/reducers/pokemonSlice";
import {fetchMoves, MovesState} from "../redux/reducers/movesSlice";
import {AbilitiesState, fetchAbilities} from "../redux/reducers/abilitiesSlice";

import Tab from '../components/common/Tab'
import TabContainer from '../containers/TabContainer'
import Stats from '../components/pokemon/Stats';
import List from '../components/common/List';
import Comment, {CommentProps} from '../components/comment/Comment';
import CommentForm from '../components/comment/CommentForm';
import PokeMoveType from '../components/common/PokeMoveType';
import {PathParamsType} from '../type'

type Props = RouteComponentProps<PathParamsType> & {
    pokemon: PokemonState,
    moves: MovesState,
    abilities: AbilitiesState,
    fetchPokemon: ({id}: { id: number | number[], lastId?: number, limit?: number }) => void
    fetchMoves: ({id}: { id: number | number[], lastId?: number, limit?: number }) => void
    fetchAbilities: ({id}: { id: number | number[], lastId?: number, limit?: number }) => void
}

export interface PokemonDetailState {
    activeTab: number,
    comments: CommentProps[]
}

class PokemonDetailContainer extends React.Component<Props, PokemonDetailState> {
    constructor(props: Props) {
        super(props);
        this.state = {activeTab: 1, comments: []};
    }

    componentDidMount() {
        // fetch pokemon detail
        (async () => {
            const pokemonId = +this.props.match.params.id
            await this.props.fetchPokemon({id: pokemonId})
            await this.props.fetchMoves({id: this.props.pokemon.list[0].moves})
            await this.props.fetchAbilities({id: this.props.pokemon.list[0].abilities})

            const comments = await localStorage.getItem(`comment-${pokemonId}`)
            if (comments !== null) {
                this.setState({comments: JSON.parse(comments)})
            }
        })()
    }

    renderPokemon = () => {
        return (
            <div className='p-5 flex flex-col'>
                <div>
                    <div className='text-4xl font-semibold'>{this.props.pokemon.list[0].name}</div>
                    <div className='text-lg text-dark-gray'>Pokemon #{this.props.pokemon.list[0].id}</div>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={this.props.pokemon.list[0].sprite} alt="Sprite" height={250} width={250}/>
                    {<div
                        className={`flex ${this.props.pokemon.list[0].types.length === 1 ? 'justify-center' : 'justify-center'} gap-5 w-1/2`}>
                        {this.props.pokemon.list[0].types.map((item) => {
                            return (
                                <div key={item}>
                                    <PokeMoveType id={item}/>
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </div>
        )
    }

    handleOnTabClick = (e: number) => {
        this.setState({activeTab: e})
    }

    commentStateRefresh = (newComments: CommentProps[]) => {
        this.setState({comments: newComments})
    }

    render() {
        console.log(this.state.comments)
        if (this.props.pokemon.list[0]) return (
            <div className='flex flex-col gap-5'>
                {this.renderPokemon()}

                <TabContainer large={false}>
                    <div className='flex justify-center content-center items-center gap-8'>
                        <Tab name='Stats' active={this.state.activeTab === 1} onClick={() => this.handleOnTabClick(1)}/>
                        <Tab name='Moves' active={this.state.activeTab === 2} onClick={() => this.handleOnTabClick(2)}/>
                        <Tab name='Abilities' active={this.state.activeTab === 3}
                             onClick={() => this.handleOnTabClick(3)}/>
                        <Tab name='Comments' active={this.state.activeTab === 4}
                             onClick={() => this.handleOnTabClick(4)}/>
                    </div>

                    {/* Stats */}
                    <div className={this.state.activeTab !== 1 ? 'hidden' : 'mt-16 inline-block'}>
                        <Stats statList={this.props.pokemon.list[0].stats}/>
                    </div>

                    {/* Moves */}
                    <div className={`${this.state.activeTab !== 2 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {this.props.moves.list && this.props.moves.list.map((item, idx) =>
                            (
                                <div key={idx}>
                                    <hr className='my-4'/>
                                    <List item={item.name} types={[item.type]} id={item.id} category='move'/>
                                </div>
                            )
                        )}
                    </div>

                    {/* Abilities */}
                    <div className={`${this.state.activeTab !== 3 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {this.props.abilities.list && this.props.abilities.list.map((item) =>
                            (
                                <div key={item.id}>
                                    <hr className='my-4'/>
                                    <List item={item.name} id={item.id} category='ability'/>
                                </div>
                            )
                        )}
                    </div>

                    {/* Comments */}
                    <div className={`${this.state.activeTab !== 4 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        <CommentForm pokemonId={+this.props.match.params.id} refreshComment={this.commentStateRefresh}/>
                        {this.state.comments.map(({comment, name, timestamp}) => <Comment name={name} comment={comment}
                                                                                          timestamp={timestamp}/>
                        )}
                    </div>

                </TabContainer>
            </div>
        )
        else return null
    }
}

const mapStateToProps = (state: RootState) => ({
    pokemon: state.pokemon,
    moves: state.moves,
    abilities: state.abilities,
})

export default connect(mapStateToProps, {fetchPokemon, fetchMoves, fetchAbilities})(withRouter(PokemonDetailContainer));