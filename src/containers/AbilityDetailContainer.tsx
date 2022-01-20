import React from 'react';
import TabContainer from './TabContainer'
import Tab from '../components/common/Tab'
import {abilityDummy, pokemonDummy} from '../helpers/dummy'
import List from '../components/common/List'
interface Props {
    
}
 
interface AbilityDetailState {
    activeTab: number;
}
 
class AbilityDetailContainer extends React.Component<Props, AbilityDetailState> {
    state = { activeTab: 1  }
    renderAbility(){
        return(
            <div className='p-5 flex flex-col'>
                <div>
                    <div className='text-4xl font-semibold'>{abilityDummy[3].name}</div>
                    <div className='text-lg text-dark-gray'>Ability</div>
                    <div className='my-5 h-11' />
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
                <this.renderAbility />
                <TabContainer large={true}>
                    <div className='flex justify-center content-center items-center gap-8'>
                        <Tab name='Detail' active={this.state.activeTab === 1 ? true : false} onClick={() => this.handleOnTabClick(1)}/>
                        <Tab name='Pokemons' active={this.state.activeTab === 2 ? true : false} onClick={() => this.handleOnTabClick(2)}/>
                    </div>

                    {/* Details */}
                    <div className={`${this.state.activeTab !== 1 ? 'hidden' : 'inline-block'} overflow-y-auto flex flex-col text-lg`}>
                       <div className='font-semibold'>Short Description</div>
                       <div>{abilityDummy[3].shortDescription}</div>
                       <div className='font-semibold mt-5'>Description</div>
                       <div>{abilityDummy[3].description}</div>              
                    </div>

                    {/* Pokemons */}
                    <div className={`${this.state.activeTab !== 2 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {pokemonDummy && pokemonDummy.map((item,idx)=>
                            (
                                <div key={idx}>
                                    <hr className='my-4' />
                                    <List item={item.name} types={item.type}  imgUrl={item.imgUrl} category='pokemon' id={item.id}/>
                                </div>
                            )
                        )}
                    </div>
                </TabContainer>
            </div>
         );
    }
}
 
export default AbilityDetailContainer;