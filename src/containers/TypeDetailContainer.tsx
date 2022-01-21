import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import {typeDummy, pokemonDummy, moveDummy} from '../helpers/dummy'
import TabContainer from './TabContainer'
import Tab from '../components/common/Tab'
import PokeMoveType from '../components/common/PokeMoveType'
import List from '../components/common/List'
import {PathParamsType} from '../type'

type Props = RouteComponentProps<PathParamsType> & {
    
}
 
interface TypeDetailState {
    activeTab: number;
}
 
class TypeDetailContainer extends React.Component<Props, TypeDetailState> {
    state = { activeTab: 1}

    componentDidMount() {
        // use this to log params
        console.log(this.props.match.params.id);
        
    }

    renderType(){
        return(
            <div className='p-5 flex flex-col'>
                <div>
                    <div className='text-4xl font-semibold'>{typeDummy[0].name}</div>
                    <div className='text-lg text-dark-gray'>Type</div>
                    
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
                <this.renderType />
                <TabContainer large={true}>
                     <div className='flex justify-center content-center items-center gap-8 '>
                        <Tab name='Dmg. Relation' active={this.state.activeTab === 1 ? true : false} onClick={() => this.handleOnTabClick(1)}/>
                        <Tab name='Pokemon' active={this.state.activeTab === 2 ? true : false} onClick={() => this.handleOnTabClick(2)}/>
                        <Tab name='Move' active={this.state.activeTab === 3 ? true : false} onClick={() => this.handleOnTabClick(3)}/>
                    </div>

                    {/* dmg relation */}
                    <div className={`${this.state.activeTab !== 1 ? 'hidden' : 'inline-block'} flex justify-center gap-20 content-center overflow-y-auto`}>
                        
                        {/* offensive */}
                        <div className='flex flex-col items-center content-center font-semibold gap-5 '>
                            <div>Offensive</div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div>2x Damage</div>
                                {typeDummy.map((item)=>{
                                    return(
                                    item.double_damage_to.map((itemDoubleTo, idx)=>{
                                        return(
                                            <PokeMoveType id={itemDoubleTo.name} key={idx} />
                                        )
                                    }))
                                })}

                                <div>1/2x Damage</div>
                                {typeDummy.map((item)=>{
                                    return(
                                    item.half_damage_to.map((itemHalfTo, idx)=>{
                                        return(
                                            <PokeMoveType id={itemHalfTo.name} key={idx} />
                                        )
                                    }))
                                })}    

                                <div>0 Damage</div>
                                {typeDummy.map((item)=>{
                                    return(
                                    item.no_damage_to.map((itemZeroTo, idx)=>{
                                        return(
                                            <PokeMoveType id={itemZeroTo.name} key={idx} />
                                        )
                                    }))
                                })}                                                             
                            </div>
                        </div>

                        {/* separator */}
                        <div className='h-full w-1 bg-dark-gray bg-opacity-20'></div>

                        {/* defensive */}
                        <div className='flex flex-col items-center content-center font-semibold gap-5 '>
                            <div>Defensive</div>
                            <div className='flex flex-col gap-4 items-center'>

                                <div>2x Damage</div>
                                {typeDummy.map((item)=>{
                                    return(
                                    item.double_damage_from.map((itemDoubleFrom, idx)=>{
                                        return(
                                            <PokeMoveType id={itemDoubleFrom.name} key={idx} />
                                        )
                                    }))
                                })}

                                <div>1/2x Damage</div>
                                {typeDummy.map((item)=>{
                                    return(
                                    item.half_damage_from.map((itemHalfFrom, idx)=>{
                                        return(
                                            <PokeMoveType id={itemHalfFrom.name} key={idx} />
                                        )
                                    }))
                                })}    

                                <div>0 Damage</div>
                                {typeDummy.map((item)=>{
                                    return(
                                    item.half_damage_from.map((itemZeroFrom, idx)=>{
                                        return(
                                            <PokeMoveType id={itemZeroFrom.name} key={idx} />
                                        )
                                    }))
                                })}                                                             
                            </div>
                        </div>
                    </div>

                    {/* pokemon */}
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
                    
                    {/* moves */}
                    <div className={`${this.state.activeTab !== 3 ? 'hidden' : 'inline-block'} overflow-y-auto `}>
                        {moveDummy && moveDummy.map((item,idx)=>
                            (
                                <div key={idx}>
                                    <hr className='my-4' />
                                    <List item={item.name} types={item.types} id={item.id} category='move'/>
                                </div>
                            )
                        )}
                    </div>
                </TabContainer>
            </div>
         );
    }
}
 
export default withRouter(TypeDetailContainer) ;