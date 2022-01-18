import React from "react";
import Header from "../components/common/Header";
import Background from "../components/common/Background";

export default class PokemonDetailLayout extends React.Component{
    render(){
        return (
            <div className="container mx-auto">
                <Background >
                    <Header favorite={true}/>
                    {this.props.children}
                </Background>
            </div>
            
        )
    }
}