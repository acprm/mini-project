import React from 'react';
import FavoriteContainer from '../containers/FavoriteContainer'
import MainLayout from '../layouts/MainLayout'

 
class Favorite extends React.Component{
    render() { 
        return ( 
            <MainLayout>
                <FavoriteContainer />
            </MainLayout>
         );
    }
}
 
export default Favorite;