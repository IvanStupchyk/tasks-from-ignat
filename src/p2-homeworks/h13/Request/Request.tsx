import React, {ChangeEvent, useState} from "react";
import {RequestAPI} from "./RequestsAPI";

export const Request = () => {
    const [state, setState] = useState<any>(null)
    const [checkboxValue, setCheckboxValue] = useState<boolean>(false)

    const addValue = () => {
        RequestAPI.addValueCheckbox(checkboxValue)
            .then(res => {
                setState(res.data)
            })
    }

    const changeCheckboxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }

    return (
        <div>
            <button onClick={addValue}>+</button>
            <input type={'checkbox'} checked={checkboxValue} onChange={changeCheckboxValue}/>
            {JSON.stringify(state)}
            {JSON.stringify(checkboxValue)}
        </div>
    )
}