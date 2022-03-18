import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {Alert, Badge, Button, IconButton, Snackbar} from "@mui/material";
import {AddBox, AddBoxTwoTone} from "@mui/icons-material";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass  // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} placeholder={"Please, enter your name"}/>
            <IconButton onClick={addUser} color={"error"} size={"large"}>
                <Badge badgeContent={totalUsers} color="success"
                       sx={{ "& .MuiBadge-badge": { fontSize: 10, height: 15, minWidth: 15 } }}>
                    <AddBox/>
                </Badge>
            </IconButton>
            <div className={s.errorDiv}>{error}</div>
        </div>
    )
}

export default Greeting
