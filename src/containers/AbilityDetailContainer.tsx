import React from 'react';
import TabContainer from './TabContainer'
import Tab from '../components/common/Tab'
import List from '../components/common/List'
import {RouteComponentProps, withRouter} from 'react-router';
import {PathParamsType} from '../type'
import {fetchPokemon, PokemonState} from "../redux/reducers/pokemonSlice";
import {AbilitiesState, fetchAbilities} from "../redux/reducers/abilitiesSlice";
import {RootState} from "../redux/store";
import {connect} from "react-redux";
import { appName } from '../helpers/baseContents';
import {Ability} from '../KeyWord'

type Props = RouteComponentProps<PathParamsType> & {
    pokemon: PokemonState,
    abilities: AbilitiesState,
    fetchPokemon: ({id}: { id: number | number[], lastId?: number, limit?: number }) => void
    fetchAbilities: ({id}: { id: number | number[], lastId?: number, limit?: number }) => void
}

interface AbilityDetailState {
    activeTab: number;
}

class AbilityDetailContainer extends React.Component<Props, AbilityDetailState> {
    state = {activeTab: 1}

    componentDidMount() {
        (async () => {
            const abilityId = +this.props.match.params.id
            await this.props.fetchAbilities({id: abilityId})
            await this.props.fetchPokemon({id: this.props.abilities.list[0].pokemon})
        })()
        const idParam = this.props.match.params.id
        document.title = `${appName} - ${Ability.filter(item => item.id === +idParam)[0].name}`
    }

    renderAbility() {
        return (
            <div className='p-5 flex flex-col'>
                <div>
                    <div className='text-4xl font-semibold'>{this.props.abilities.list[0].name}</div>
                    <div className='text-lg text-dark-gray'>Ability</div>
                    <div className='my-5 h-11'/>
                </div>
            </div>
        )
    }


    handleOnTabClick(e: number) {
        this.setState({activeTab: e})
    }

    render() {
        if (this.props.abilities.list[0]) return (
            <div className='flex flex-col gap-5'>
                {this.renderAbility()}
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
                        <div className='font-semibold'>Short Description</div>
                        <div>{this.props.abilities.list[0].shortDescription}</div>
                        <div className='font-semibold mt-5'>Description</div>
                        <div>{this.props.abilities.list[0].longDescription}</div>
                    </div>

                    {/* Pokemons */}
                    <div className={`${this.state.activeTab !== 2 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {this.props.pokemon.list && this.props.pokemon.list.map((item, idx) =>
                            (
                                <div key={idx}>
                                    <hr className='my-4'/>
                                    <List item={item.name} types={item.types} imgUrl={item.sprite} category='pokemon'
                                          id={item.id}/>
                                </div>
                            )
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
    abilities: state.abilities,
})

export default connect(mapStateToProps, {fetchPokemon, fetchAbilities})(withRouter(AbilityDetailContainer));