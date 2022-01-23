import React, {Component} from "react";
import {PokemonStat} from "../../redux/reducers/pokemonSlice";
import Stat from "../common/Stat";

// Still use hard-coded (dummy-data)
// TODO 1. define props type to be inserted as the Stat property
// TODO 2. Add calculation for total stat

interface StatsProps {
    statList: PokemonStat[]
}

class Stats extends Component<StatsProps>{

    totalStats = (statList: PokemonStat[]) => {
        let totalBase = 0

        for (let i = 0; i < statList.length; i++) {
            totalBase += statList[i].baseStat
        }

        return totalBase
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.statList.map((index: any) => <Stat key={index.statName} baseStat={index.baseStat} statName={index.statName} maxStat={index.maxStat}/>)}
                    <Stat baseStat={this.totalStats(this.props.statList)} maxStat={720} statName="Total"/>
                </div>
            </div>
        )
    }
}

export default Stats