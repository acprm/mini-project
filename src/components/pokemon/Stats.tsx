import React, {Component} from "react";

import Stat from "../common/Stat";

// Still use hard-coded (dummy-data)
// TODO 1. define props type to be inserted as the Stat property
// TODO 2. Add calculation for total stat

class Stats extends Component<any, any>{

    totalStats = (statList: PokemonStat[]) => {
        // calculate the total stat from the Array of PokemonStat Object
    }

    render() {
        return (
            <div>
                <div>
                    <Stat baseStat={10} maxStat={120} statName="HP"/>
                    <Stat baseStat={30} maxStat={120} statName="Attack"/>
                    <Stat baseStat={50} maxStat={120} statName="Defense"/>
                    <Stat baseStat={70} maxStat={120} statName="Sp. Atk"/>
                    <Stat baseStat={90} maxStat={120} statName="Sp. Def"/>
                    <Stat baseStat={110} maxStat={120} statName="Speed"/>
                    <Stat baseStat={500} maxStat={720} statName="Total"/>
                </div>
            </div>
        )
    }
}

export default Stats