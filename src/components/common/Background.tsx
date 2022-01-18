import React from "react";

export default class Background extends React.Component{
    render(): React.ReactNode {
        return (
            <>
                <div className="bg-pokeball-full bg-top bg-no-repeat" style={{backgroundPositionY:'-12%'}} >
                    {this.props.children}
                </div>
            </>
        )
    }
}