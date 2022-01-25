import React from 'react';
import MoveDetailContainer from '../containers/MoveDetailContainer'
import MainLayout from '../layouts/MainLayout'

 
class MoveDetail extends React.Component{
    render() { 
        return ( 
            <MainLayout>
                <MoveDetailContainer />
            </MainLayout>
         );
    }
}
 
export default MoveDetail;