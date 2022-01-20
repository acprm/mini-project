import React from 'react';

interface TabContainerProps{
    large: boolean
}

class TabContainer extends React.Component<TabContainerProps> {
    static defaultProps:{
        large:true
    }
    render() { 
        return ( 
            <div className='p-5 rounded-xl shadow-inner border flex flex-col gap-5' style={this.props.large ? {height:'600px'}:{height:'400px'}}>
                {this.props.children}
            </div>
         );
    }
}
export default TabContainer;