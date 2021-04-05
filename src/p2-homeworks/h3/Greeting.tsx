import React, {ChangeEventHandler, FocusEventHandler, MouseEventHandler, useState} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: ChangeEventHandler<HTMLInputElement>
    addUser: MouseEventHandler<HTMLButtonElement>
    error: string
    totalUsers: number
    setFocus: FocusEventHandler<HTMLInputElement>
    btnState: boolean
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,setFocus, btnState}
) => {
    const inputClass = error ? s.error : s.completed



    return (
        <div className={s.containerForm}>
            <div className={s.firstBlock}>
                <input placeholder={'Add your name'} value={name} onFocus={setFocus} onChange={setNameCallback} className={`${inputClass} ${s.inputStyle}`}/>
                <button disabled={btnState} onClick={addUser} className={s.btnAdd}>Add</button>
                <span className={s.totalCount}>{totalUsers}</span>
            </div>
            <div>
                <span className={s.messageError}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting
