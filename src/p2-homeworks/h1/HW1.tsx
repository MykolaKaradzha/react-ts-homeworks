import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import {Typography} from "@mui/material";


export type messagesType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData:messagesType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const alternativeMessageData:messagesType = {
    avatar: 'https://sun9-88.userapi.com/sun9-48/impg/R_ZsNvc5YOJu8p5lmigVQZD-W3qUwMFKeF7TzA/FnsmPZo2mUg.jpg?size=604x604&quality=96&sign=872cd30016d1cbaa091ab7af6eb80c4b&type=album',
    name: 'Си Цзиньпин',
    message: 'Партия гордится тобой! Партия выдать тебе одна кошка жена и миска риса',
    time: '00:01',
}

function HW1() {
    return (
        <>
             <Typography variant={"h5"} align={'center'}>Homeworks 1</Typography>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}/>
                {/*<AlternativeMessage*/}
                {/*    avatar={alternativeMessageData.avatar}*/}
                {/*    name={alternativeMessageData.name}*/}
                {/*    message={alternativeMessageData.message}*/}
                {/*    time={alternativeMessageData.time}/>*/}

        </>    )

}

export default HW1
