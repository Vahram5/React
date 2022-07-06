import {combineReducers, createStore} from "redux"
import { arr, photoReducee } from "../features/photoArr/photoArrSlice"


export const store = createStore(combineReducers({
    photoArr: photoReducee
}), {
    photoArr: arr
})