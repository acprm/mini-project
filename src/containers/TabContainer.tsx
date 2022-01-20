import React from 'react';


class TabContainer extends React.PureComponent {
    render() { 
        return ( 
            <div className='p-5 rounded-2xl shadow-inner flex flex-col gap-5 max-h-64' >
                {this.props.children}
            </div>
         );
    }
}
export default TabContainer;