import React from "react";

export default class Background extends React.Component{
    render(): React.ReactNode {
        return (
            <>
                <div className="bg-pokeball-full bg-top bg-no-repeat" style={{backgroundPositionY:'top-center'}} >
                    {this.props.children}
                </div>
            </>
        )
    }
}