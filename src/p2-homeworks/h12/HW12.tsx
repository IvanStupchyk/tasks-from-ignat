import React, {useEffect, useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {ActionsThemeReducerType, changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useDispatch<Dispatch<ActionsThemeReducerType>>()
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

    const [value, onChangeOption] = useState(themes[0])

    useEffect(() => {
        dispatch(changeThemeC(value))
    }, [value])

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homework 12
            </span>
            <SuperSelect
                className={s.selectBorders}
                options={themes}
                onChangeOption={onChangeOption}
                value={value}
            />
            <hr/>
        </div>
    );
}

export default HW12;
