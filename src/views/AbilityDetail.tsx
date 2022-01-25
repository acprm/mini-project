import React from 'react';
import AbilityDetailContainer from '../containers/AbilityDetailContainer'
import MainLayout from '../layouts/MainLayout'

 
class AbilityDetail extends React.Component{
    render() { 
        return ( 
            <MainLayout>
                <AbilityDetailContainer />
            </MainLayout>
         );
    }
}
 
export default AbilityDetail;
