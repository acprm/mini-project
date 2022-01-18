import React from "react";
import Header from "../components/common/Header";
import Background from "../components/common/Background";

export default class HomeLayout extends React.Component{
    render(){
        return (
            <div className="max-w-screen-sm mx-auto border">
                <Background >
                    <Header back={false}/>
                    {this.props.children}
                </Background>
            </div>
            
        )
    }
}