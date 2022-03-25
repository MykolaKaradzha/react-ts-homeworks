import React from 'react'
import {Container, Grid, Paper, Stack} from "@mui/material";
import {v1} from "uuid";
import HW7 from "../../h7/HW7";


export function Junior() {
    const homeworks = [<HW7/>]

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



// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз