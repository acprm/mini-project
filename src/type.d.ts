export interface DataMin {
    id: number
    name: string
}

export interface ComponentPropsMin {
    className?: string
}

export type Status = "idle" | "loading" | "failed"

export type DataType = "pokemon" | "move" | "ability" | "type"

export interface PathParamsType {
    id: string
}
