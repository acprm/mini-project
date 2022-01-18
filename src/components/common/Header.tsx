import React from "react";
import Background from './Background'

interface HeaderProps{
    back:boolean;
    favorite:boolean;
}

export default class Header extends React.Component<HeaderProps>{

    static defaultProps = {
        back: true,
        favorite: false
    }

    render(): React.ReactNode {
        return(
            <div className="flex justify-center gap-8 py-5">
                
                {this.props.back ? (
                    <a href="/">
                        <img src="/arrow-back.svg" alt="Back" />
                    </a>
                    ) : (
                        <div className="bg-red w-6 h-6" />
                    )
                }            
                

                <div className="rounded-xl bg-red-500 bg-opacity-80 w-64 h-5" />
                <div className="cursor-pointer">
                    {this.props.favorite && <img src="/heart-outline.svg" alt="Favorite" />}
                    {!this.props.favorite && <img src="/menu.svg" alt="Menu" />}
                </div>
                
            </div>
        )
    }
}