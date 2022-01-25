import React from 'react';
import PokemonDetailContainer from '../containers/PokemonDetailContainer'
import PokemonDetailLayout from '../layouts/PokemonDetailLayout'
 
class PokemonDetail extends React.Component{
    render() { 
        return ( 
            <PokemonDetailLayout>
                <PokemonDetailContainer />
            </PokemonDetailLayout>
         );
    }
}
 
export default PokemonDetail;