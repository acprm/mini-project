export const capitalizeSingle = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const capitalizeMultiple = (str: string, separator: string): string => {
    const arr = str.split(separator)

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }

    return arr.join(separator)
}