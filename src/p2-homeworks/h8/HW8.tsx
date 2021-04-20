import React, {useState} from 'react'
import {CheckTypeAC, homeWorkReducer, SortTypeAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.user_appearance}>
            <p>{p.name}</p>
            <p>{p.age}</p>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortTypeAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortTypeAC('down')))
    const sortCheckAdult = () => setPeople(homeWorkReducer(initialPeople, CheckTypeAC(18)))

    return (
        <div className={s.container}>
            <hr/>
            homework 8
            <div className={s.users_container}>
                {finalPeople}
            </div>

            <div className={s.btns_position}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={sortCheckAdult}>check 18</SuperButton></div>
            </div>
        </div>
    )
}

export default HW8
