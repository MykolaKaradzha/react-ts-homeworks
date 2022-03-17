import React from 'react'
import HW1 from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'
import {Container, Grid, Paper} from "@mui/material";

function PreJunior() {
    const homeworks = [<HW1/>, <HW2/>, <HW3/>, <HW4/>]
    return (
            <Container>
                <Grid container spacing={3}>
                    {homeworks.map(homework => <Grid item>
                        <Paper sx={{padding: 1}} elevation={6}>
                            {homework}
                        </Paper>
                    </Grid>)}
                </Grid>
            </Container>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз