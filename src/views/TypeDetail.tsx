import React from 'react';
import TypeDetailContainer from '../containers/TypeDetailContainer'
import MainLayout from '../layouts/MainLayout'

 
class TypeDetail extends React.Component{
    render() { 
        return ( 
            <MainLayout>
                <TypeDetailContainer />
            </MainLayout>
         );
    }
}
 
export default TypeDetail;