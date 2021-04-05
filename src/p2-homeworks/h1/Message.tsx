import React from 'react';
import s from './Message.module.css';

type messageDataPropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageDataPropsType) {
    return (
        <div className={s.message}>
            <div className={s.position_container_img}>
                <div className={s.avatar}>
                    <img src={props.avatar}></img>
                </div>
            </div>

            <div className={s.message_container}>
                <p className={s.user_name}>{props.name}</p>
                <p className={s.user_message}>{props.message}</p>
                <div className={s.time_message}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;
