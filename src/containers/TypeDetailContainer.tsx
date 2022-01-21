import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import {pokemonDummy, moveDummy} from '../helpers/dummy'
import TabContainer from './TabContainer'
import Tab from '../components/common/Tab'
import PokeMoveType from '../components/common/PokeMoveType'
import List from '../components/common/List'
import {PathParamsType} from '../type'
import {fetchTypes, TypesState} from '../redux/reducers/typesSlice'
import {fetchPokemon, PokemonState } from '../redux/reducers/pokemonSlice';
import {connect} from 'react-redux'
import {RootState} from '../redux/store'

type Props = RouteComponentProps<PathParamsType> & {
    types: TypesState;
    pokemon: PokemonState;
    fetchTypes: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void;
    fetchPokemon: ({id, lastId, limit}: { id: number | number[], lastId?: number, limit?: number }) => void;
}
 
interface TypeDetailState {
    activeTab: number;
}
 
class TypeDetailContainer extends React.Component<Props, TypeDetailState> {
    state = { activeTab: 1}

    componentDidMount():void {
        // use this to log params
        const idParam = parseInt(this.props.match.params.id)
        this.props.fetchTypes({id:idParam})
        // console.log(this.props.types.list[0].name);
         
        
        // console.log(this.props.types.list[0].name);
        
        // this.props.fetchPokemon({id:this.props.types.list[0].pokemon})
    }

    RenderOffensive(){
        return(
            <div className='flex flex-col items-center content-center font-semibold gap-5 '>
                            <div>Offensive</div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div>2x Damage</div>
                                {this.props.types.list[0].offensive.double.map((item, idx)=>{
                                    return(
                                        <PokeMoveType id={item} key={idx} />
                                    )
                                })}

                                <div>1/2x Damage</div>
                                {this.props.types.list[0].offensive.half.map((item,idx)=>{
                                    return(
                                        <PokeMoveType id={item} key={idx} />
                                    )
                                })}    

                                <div>0 Damage</div>
                                {this.props.types.list[0].offensive.zero.map((item, idx)=>{
                                    return(
                                        <PokeMoveType id={item} key={idx} />
                                    )
                                })}                                                             
                            </div>
                        </div>
        )
    }

    RenderDefensive(){
        return(
            <div className='flex flex-col items-center content-center font-semibold gap-5 '>
                            <div>Defensive</div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div>2x Damage</div>
                                {this.props.types.list[0].defensive.double.map((item, idx)=>{
                                    return(
                                        <PokeMoveType id={item} key={idx} />
                                    )
                                })}

                                <div>1/2x Damage</div>
                                {this.props.types.list[0].defensive.half.map((item,idx)=>{
                                    return(
                                        <PokeMoveType id={item} key={idx} />
                                    )
                                })}    

                                <div>0 Damage</div>
                                {this.props.types.list[0].defensive.zero.map((item, idx)=>{
                                    return(
                                        <PokeMoveType id={item} key={idx} />
                                    )
                                })}                                                             
                            </div>
                        </div>
        )
    }


    RenderType(){
        this.props.types.list && this.props.types.list.map((item)=>{
            return(
                <div className='p-5 flex flex-col'>
                    <div>
                        <div className='text-4xl font-semibold'>{item.name}</div>
                        <div className='text-lg text-dark-gray'>Type</div>
                        <div className='my-5 h-11' />
                    </div>
                </div>
            )
        })
    }

    handleOnTabClick(e:number){
        this.setState({activeTab:e})
    }

    render():React.ReactNode { 
        
        
    
        return ( 
            <div className='flex flex-col gap-5'>
                {/* {this.RenderType()} */}
                <TabContainer large={true}>
                     <div className='flex justify-center content-center items-center gap-8 '>
                        <Tab name='Dmg. Relation' active={this.state.activeTab === 1 ? true : false} onClick={() => this.handleOnTabClick(1)}/>
                        <Tab name='Pokemon' active={this.state.activeTab === 2 ? true : false} onClick={() => this.handleOnTabClick(2)}/>
                        <Tab name='Move' active={this.state.activeTab === 3 ? true : false} onClick={() => this.handleOnTabClick(3)}/>
                    </div>

                    {/* dmg relation */}
                    
                    <div className={`${this.state.activeTab !== 1 ? 'hidden' : 'inline-block'} flex justify-center gap-20 content-center overflow-y-auto`}>
                        
                        {/* offensive */}
                        {/* <this.RenderOffensive /> */}

                        {/* separator */}
                        <div className='h-full w-1 bg-dark-gray bg-opacity-20'></div>

                        {/* defensive */}
                        {/* < this.RenderDefensive/> */}
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

const mapStateToProps = (state: RootState) => ({
    types: state.types,
    pokemon: state.pokemon
})
 
export default connect(mapStateToProps, {fetchTypes, fetchPokemon})(withRouter(TypeDetailContainer)) ;