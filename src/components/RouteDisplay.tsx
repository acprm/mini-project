import React from "react"
import Stats from "./pokemon/Stats";


type Props = {
    path: string
}

export default class RouteDisplay extends React.Component<Props>{
    render(){
        return(
            // <div className="container flex border mx-auto text-5xl justify-center items-center h-screen ">
            // </div>
            <div>
                <Stats/>
            </div>
        )
    }
}
