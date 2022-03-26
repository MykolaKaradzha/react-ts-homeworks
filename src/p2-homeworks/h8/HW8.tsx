import React, {useState} from 'react'
import {checkListAC, homeWorkReducer, sortListDownAC, sortListUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";



export type UserType = {
    _id: number
    name: string
    age: number
}


const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    // need to fix any
    const finalPeople = people.map((p) => (
        <>
            <TableRow key={p._id}>
                <TableCell align={'left'}>{p.name}</TableCell>
                <TableCell align={'left'}>{p.age}</TableCell>
            </TableRow>
        </>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortListUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortListDownAC()))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkListAC()))
    const defaultButton = () => setPeople(initialPeople)

    return (
        <>
            <Typography variant={"h5"} align={'left'}>Homeworks 8</Typography>
            <Table sx={{ minWidth: 320 }}>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {finalPeople}
                </TableBody>
            </Table>

            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
                <SuperButton onClick={defaultButton}>default</SuperButton>
            </div>
        </>
    )
}

export default HW8
