import React from 'react';

export interface Props {
    active: boolean;
    name: string;
    onClick: () => void
}
 
class Tab extends React.PureComponent<Props> {
    static defaultProps = {
        active : false
    }
    render() { 
        return ( 
            <div className={`${this.props.active && 'font-semibold underline underline-offset-8  decoration-main-red'} cursor-pointer`} onClick={this.props.onClick}>
                {this.props.name}
            </div>
         );
    }
}
 
export default Tab;