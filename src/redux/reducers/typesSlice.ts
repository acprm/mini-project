import {DataMin} from "../../type";

export interface TypeDetail extends DataMin {
    offensive: DamageRelation
    defensive: DamageRelation
    moves: number[]
    pokemon: number[]
}

export interface DamageRelation {
    double: string[],
    half: string[],
    zero: string[]
}
