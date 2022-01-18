import React from "react";
import Header, {Back} from "../components/common/Header";
import Background from "../components/common/Background";

export default class HomeLayout extends React.Component{
    render(){
        return (
            <div className="container mx-auto">
                <Background >
                    <Header back={Back.HOME}/>
                    {this.props.children}
                </Background>
            </div>
            
        )
    }
}