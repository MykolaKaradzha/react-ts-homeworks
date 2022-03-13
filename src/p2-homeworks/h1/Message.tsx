import React from 'react'
import s from "./Message.module.css"
import {messagesType} from "./HW1";



function Message(props: messagesType) {
    return (
        <div className={s.container}>
            <div className={s.avatar}>
                <img src={props.avatar}
                    alt="готичная кошка жена от партии"/>
            </div>
            <div className={s.message}>
                <div className={s.message__name}>{props.name}</div>
                <div className={s.message__text}>{props.message}
                </div>
                <div className={s.message__time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
