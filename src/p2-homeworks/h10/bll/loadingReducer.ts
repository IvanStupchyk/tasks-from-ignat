type initStateType = {
    isFetching: boolean
}

const initState = {
    isFetching: false
}

export const loadingReducer = (state: initStateType = initState, action: loadingType): initStateType => {
    switch (action.type) {
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        default: return state
    }
}

export type loadingType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}
export const loadingAC = (isFetching: boolean): loadingType => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}