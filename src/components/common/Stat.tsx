import "./Stat.css"
import {PokemonStat} from "../../redux/reducers/pokemonSlice";

const Stat = (props: PokemonStat) => {
    const percentage = props.baseStat / props.maxStat
    let color
    

    if (percentage <= 1/3) {
        color = "low"
    } else if (percentage >= 1/3 && percentage <= 2/3) {
        color = "medium"
    } else if (percentage > 2/3) {
        color = "high"
    }

    return (
        <div className="flex">
            <div className="basis-1/4">{props.statName}</div>
            <div className="basis-1/4 font-bold">{props.baseStat}</div>
            <div className="basis-1/2">
                <progress className={`progress progress-${color}`} value={props.baseStat} max={props.maxStat}/>
            </div>
        </div>
    )
}

export default Stat