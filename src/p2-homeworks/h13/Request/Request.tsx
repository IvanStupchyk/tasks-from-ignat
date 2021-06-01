import React, {ChangeEvent, useState} from "react";
import {RequestAPI} from "./RequestsAPI";
import s from "../../h3/Greeting.module.css";

export const Request = () => {
    const [state, setState] = useState<any>()
    const [checkboxValue, setCheckboxValue] = useState<boolean>(false)

    const addValue = () => {
        RequestAPI.addValueCheckbox(checkboxValue)
            .then(res => {
                setState(res.data)
            })
            .catch(error => {
                setState(error.message)
            })
    }

    const changeCheckboxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }

    return (
        <div style={{padding: '20px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <button onClick={addValue} className={s.btnAdd}>Send inquiry</button>
                <label className={s.checkboxHW13}>
                    <input type={'checkbox'} checked={checkboxValue} onChange={changeCheckboxValue}/>
                    <span/>
                </label>
            </div>
            {JSON.stringify(state)}
        </div>
    )
}