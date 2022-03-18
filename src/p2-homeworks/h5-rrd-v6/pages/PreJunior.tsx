import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import {Container, Grid, Paper, Stack} from "@mui/material";
import {v1} from "uuid";
import HW6 from "../../h6/HW6";


function PreJunior() {
    const homeworks = [<HW1/>, <HW2/>, <HW3/>, <HW4/>, <HW6/>]

    return (
        <Container>
            <Grid container spacing={10} justifyContent="center">
                {homeworks.map(homework => {
                    const newID = v1()
                    return <Grid item key={newID}>
                        <Paper sx={{padding: 1, minHeight: 200, minWidth: 200}} elevation={6}
                               component={Stack} direction="column" justifyContent="center" alignItems="center">
                            {homework}
                        </Paper>
                    </Grid>
                })}
            </Grid>

        </Container>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз