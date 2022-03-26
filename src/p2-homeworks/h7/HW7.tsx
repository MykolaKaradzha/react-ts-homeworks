

import React, {ChangeEvent, useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import {Typography} from "@mui/material";


const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState<string>(arr[1])

    return (<>

            <Typography variant={"h5"} align={'center'} sx={{paddingBottom:2}}>Homeworks 7</Typography>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRadio/>*/}
        </>
    )
}

export default HW7
