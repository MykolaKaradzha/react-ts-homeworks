import React, {useState} from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import {Navigation} from "./Navigation";
import {createTheme, ThemeProvider} from "@mui/material";

function HW5() {
    const [isOpen, setOpen] = useState<boolean>(false)

    const [isNightModeOn, setNightModeOn] = useState<boolean>(false)
    const closeMenu = () => setOpen(false)
    const openMenu = () => setOpen(true)
    const lightTheme = createTheme({
        palette: {
            mode: 'light'
        }
    })
    const darkTheme = createTheme({
        palette: {
            mode: 'dark'
        }
    })
    return (
        <>
            {/*в gh-pages лучше работает HashRouter*/}
            <ThemeProvider theme={isNightModeOn ? darkTheme : lightTheme}>
                <HashRouter>
                    <Header openMenu={openMenu} setNightModeOn={setNightModeOn} isNightModeOn={isNightModeOn}/>
                    <Navigation closeMenu={closeMenu} open={isOpen}/>
                    <Pages/>
                </HashRouter>
            </ThemeProvider>

        </>

    )
}

export default HW5
