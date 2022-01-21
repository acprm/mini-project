export interface DataMin {
    id: number
    name: string
}

export type Status = "idle" | "loading" | "failed"

export type DataType = "pokemon" | "move" | "ability" | "type"