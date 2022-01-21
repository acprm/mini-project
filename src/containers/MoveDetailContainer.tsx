import React from 'react';
import TabContainer from './TabContainer'
import Tab from '../components/common/Tab'
import {moveDummy, pokemonDummy} from '../helpers/dummy'
import PokeMoveType from '../components/common/PokeMoveType'
import List from '../components/common/List'
import { withRouter, RouteComponentProps } from 'react-router';
import {PathParamsType} from '../type'

type Props = RouteComponentProps<PathParamsType> & {
    
}
 
interface MoveDetailState {
    activeTab: number;
}
 
class MoveDetailContainer extends React.Component<Props, MoveDetailState> {
    state = { activeTab: 1  }
    
    componentDidMount(){
        // use this to log param 
        console.log(this.props.match.params.id);
        
    }

    renderMove(){
        return(
            <div className='p-5 flex flex-col'>
                <div>
                    <div className='text-4xl font-semibold'>{moveDummy[5].name}</div>
                    <div className='text-lg text-dark-gray'>Move</div>
                    <div className='my-5'>
                        <PokeMoveType id={moveDummy[5].types[0]} />
                    </div>
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
                <this.renderMove />
                <TabContainer large={true}>
                    <div className='flex justify-center content-center items-center gap-8'>
                        <Tab name='Detail' active={this.state.activeTab === 1 ? true : false} onClick={() => this.handleOnTabClick(1)}/>
                        <Tab name='Pokemon' active={this.state.activeTab === 2 ? true : false} onClick={() => this.handleOnTabClick(2)}/>
                    </div>

                    {/* Details */}
                    <div className={`${this.state.activeTab !== 1 ? 'hidden' : 'inline-block'} overflow-y-auto flex flex-col text-lg`}>
                       <div className='font-semibold'>Short Description</div>
                       <div>{moveDummy[5].shortDescription}</div>
                       <div className='font-semibold mt-5'>Description</div>
                       <div>{moveDummy[5].description}</div>
                       <hr className='my-3' />
                       <div className='font-semibold'>Stats</div>
                       <div className='grid grid-cols-2'>
                            {/* acc */}
                            <div>Accuracy</div>
                            <div className='font-semibold'>{moveDummy[5].accuracy}</div>

                            {/* power */}
                            <div>Power</div>
                            <div className='font-semibold'>{moveDummy[5].power}</div>
                            
                            {/* pp */}
                            <div>PP</div>
                            <div className='font-semibold'>{moveDummy[5].pp}</div>
                       </div>
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
 
export default withRouter(MoveDetailContainer);