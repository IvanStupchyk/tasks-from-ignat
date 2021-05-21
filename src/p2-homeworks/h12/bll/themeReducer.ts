enum ACTIONS_TYPE {
    CHANGE_THEME = 'p2-homeworks/h12/bll/themeReducer/change-theme'
}

export type initStateType = {
    theme: string
}

const initState: initStateType = {
    theme: 'some'
};

export type ActionsThemeReducerType = ChangeThemeType

export const themeReducer = (state: initStateType = initState, action: ActionsThemeReducerType): initStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_THEME:
            return {...state, ...action.payload}
        default:
            return state;
    }
};

type ChangeThemeType = {
    type: ACTIONS_TYPE.CHANGE_THEME
    payload: { theme: string }
}

export const changeThemeC = (theme: string): ChangeThemeType => {
    return {
        type: ACTIONS_TYPE.CHANGE_THEME,
        payload: {theme}
    }
}