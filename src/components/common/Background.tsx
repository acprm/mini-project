import React from "react";

export default class Background extends React.Component{
    render(): React.ReactNode {
        return (
            <>
                <div className="bg-pokeball-full bg-fixed bg-no-repeat" style={{"backgroundPosition":"50% 12%"}}>
                    {this.props.children}
                </div>
            </>
        )
    }
}