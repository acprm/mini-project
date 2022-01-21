import React from 'react';
import Tab from '../components/common/Tab'
import TabContainer from '../containers/TabContainer'
import Stats from '../components/pokemon/Stats';
import List from '../components/common/List';
import Comment from '../components/comment/Comment';
import CommentForm from '../components/comment/CommentForm';
import { abilityDummy, moveDummy, pokemonDummy } from '../helpers/dummy';
import PokeMoveType from '../components/common/PokeMoveType';

export interface Props {
    
}
 
export interface PokemonDetailState {
    activeTab: number
}
 
class PokemonDetailContainer extends React.Component<Props, PokemonDetailState> {
    state = { activeTab: 1 }

    renderPokemon(){
        return(
            <div className='p-5 flex flex-col'>
                <div>
                    <div className='text-4xl font-semibold'>{pokemonDummy[0].name}</div>
                    <div className='text-lg text-dark-gray'>Pokemon #{pokemonDummy[0].id}</div>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={pokemonDummy[0].imgUrl} alt="Sprite" height={250} width={250} />
                    {<div className={`flex ${pokemonDummy[0].type.length === 1 ? 'justify-center' : 'justify-center'} gap-5 w-1/2`}>
                        {pokemonDummy[0].type.map((item, idx)=>{
                            return(
                                <div key={idx}>
                                    <PokeMoveType id={item} />
                                </div>
                            )
                        })}
                    </div>}
                </div>
            </div>
        )
    }

    handleOnTabClick(e:number){
        this.setState({activeTab:e})
    }

    render() { 
        return ( 
            <div className='flex flex-col gap-5'>
                <this.renderPokemon/>

                <TabContainer large={false}>
                    <div className='flex justify-center content-center items-center gap-8'>
                        <Tab name='Stats' active={this.state.activeTab === 1 ? true : false} onClick={() => this.handleOnTabClick(1)}/>
                        <Tab name='Moves' active={this.state.activeTab === 2 ? true : false} onClick={() => this.handleOnTabClick(2)}/>
                        <Tab name='Abilities' active={this.state.activeTab === 3 ? true : false} onClick={() => this.handleOnTabClick(3)}/>
                        <Tab name='Comments' active={this.state.activeTab === 4 ? true : false} onClick={() => this.handleOnTabClick(4)}/>
                    </div>

                    {/* Stats */}
                    <div className={this.state.activeTab !== 1 ? 'hidden' : 'mt-16 inline-block'}>
                        <Stats/>
                    </div>

                    {/* Moves */}
                    <div className={`${this.state.activeTab !== 2 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {moveDummy && moveDummy.map((item,idx)=>
                            (
                                <div key={idx}>
                                    <hr className='my-4' />
                                    <List item={item.name} types={item.types} id={item.id} category='move'/>
                                </div>
                            )
                        )}
                    </div>

                    {/* Abilities */}
                    <div className={`${this.state.activeTab !== 3 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {abilityDummy && abilityDummy.map((item,idx)=>
                            (
                                <div key={idx}>
                                    <hr className='my-4' />
                                    <List item={item.name} id={item.id} category='ability' />
                                </div>
                            )
                        )}
                    </div>

                    {/* Comments */}
                    <div className={`${this.state.activeTab !== 4 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        <Comment name='User 1' comment='Cool Pokemon' timestamp={new Date} />
                        <Comment name='User 2' comment='Beats elite 4 in one move' timestamp={new Date} />
                        <Comment name='User 3' comment='Chose him as my starter, no regrets' timestamp={new Date} />
                        <Comment name='User 4' comment='Cool' timestamp={new Date} />
                        <Comment name='User 5' comment='mantap' timestamp={new Date} />
                        <CommentForm />
                    </div>

                </TabContainer>
            </div>
         );
    }
}
 
export default PokemonDetailContainer;