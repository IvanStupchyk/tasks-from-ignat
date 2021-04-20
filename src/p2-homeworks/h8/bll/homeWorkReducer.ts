import {UserType} from "../HW8";

type CheckType = {
    type: 'check'
    payload: number
}

type SortType = {
    type: 'sort'
    payload: string
}

type ActionsType = SortType | CheckType

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up':
                    return [...state.sort((a, b) => b.age - a.age)]
                case 'down':
                    return [...state.sort((a, b) => a.age - b.age)]
                default:
                    return state
            }
        }
        case 'check': {
            return [...state.filter(u => u.age > action.payload)]
        }
        default:
            return state
    }
}

export const CheckTypeAC = (payload: number): CheckType => {
    return {
        type: 'check',
        payload
    }
}

export const SortTypeAC = (payload: string): SortType => {
    return {
        type: 'sort',
        payload
    }
}