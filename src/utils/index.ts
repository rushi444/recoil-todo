import { ITodo } from "../types";

/** Get incremented id utility */
let id = 0;

export const getId = () => id++;

export const replaceItemAtIndex = (arr: ITodo[], index: number, newValue: ITodo) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export const removeItemAtIndex = (arr: ITodo[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}