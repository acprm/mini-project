import {DataMin} from "../../type";

export interface MoveDetail extends DataMin {
    type: string
    shortDescription: string
    longDescription: string
    pp: number,
    accuracy: number,
    power: number,
    pokemon: number[]
}