import React from 'react'
import {messagesType} from "./HW1";
import s from "./AlternativeMessage.module.css"

function AlternativeMessage(props: messagesType) {
    return (
        <div className={s.container}>
            <div className={s.avatar}>
                <img src={props.avatar}
                     alt="кошка жена и 2 миски риса от партии"/>
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

export default AlternativeMessage
