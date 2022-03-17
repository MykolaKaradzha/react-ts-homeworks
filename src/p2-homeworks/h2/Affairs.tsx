import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType;
}

const Affairs:React.FC<AffairsPropsType> = ({data, setFilter, deleteAffairCallback, filter}) => {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {
        setFilter('all')
    }
    const setHigh = () => {
        setFilter('high')
    }
    const setMiddle = () => {
        setFilter('middle')
    }
    const setLow = () => {
        setFilter('low')
    }
    const allVariant = filter === 'all' ? 'contained' : 'text'
    const highVariant = filter === 'high' ? 'contained' : 'text'
    const middleVariant = filter === 'middle' ? 'contained' : 'text'
    const lowVariant = filter === 'low' ? 'contained' : 'text'
    return (


        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 70}}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>{mappedAffairs}</TableBody>
                </Table>
            </TableContainer>

            {/*<table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <td>Name</td>*/}
            {/*        <td>Priority</td>*/}
            {/*        <td>Delete</td>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>{mappedAffairs}</tbody>*/}
            {/*</table>*/}

            <Button  onClick={setAll} variant={allVariant} color={'primary'}>All</Button>
            <Button  onClick={setHigh} variant={highVariant} color={'error'}>High</Button>
            <Button  onClick={setMiddle} variant={middleVariant} color={'warning'}>Middle</Button>
            <Button  onClick={setLow} variant={lowVariant} color={'success'}>Low</Button>
        </div>
    )
}

export default Affairs
