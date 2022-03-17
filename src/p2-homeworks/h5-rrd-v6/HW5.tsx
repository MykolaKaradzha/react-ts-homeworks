import React, {useState} from 'react'
import Header from './Header'
import Pages from './Pages'
import {HashRouter} from "react-router-dom";
import {Navigation} from "./Navigation";



function HW5() {
    const [isOpen, setOpen] = useState<boolean>(false)
    const closeMenu = () => setOpen(false)
    const openMenu = () => setOpen(true)
    return (
        <>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                    <Header openMenu={openMenu}/>
                    <Navigation closeMenu={closeMenu} open={isOpen}/>
                    <Pages/>
            </HashRouter>
        </>

    )
}

export default HW5
