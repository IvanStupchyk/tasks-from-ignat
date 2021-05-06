import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {loadingAC, loadingType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import loader from './bean-eater.svg'

function HW10() {
    const dispatch = useDispatch<Dispatch<loadingType>>()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isFetching)

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => dispatch(loadingAC(false)), 1500)
    };

    return (
        <div>
            <hr/>
            homework 10

            {loading
                ? (
                    <div> <img src={loader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10
