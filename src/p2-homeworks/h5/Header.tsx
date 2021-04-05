import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Routes';
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.header_container}>
            <div className={s.page}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active_page}>Pre junior</NavLink>
            </div>

            <div className={s.page}>
                <NavLink to={PATH.JUNIOR} activeClassName={s.active_page}>Junior</NavLink>
            </div>

            <div className={s.page}>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active_page}>Junior+</NavLink>
            </div>

            <div className={s.arrow}></div>
        </div>
    )
}

export default Header
