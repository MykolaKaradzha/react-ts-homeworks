import React from 'react'
import {AppBar, IconButton, Toolbar, Typography,} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {NightSwitch} from "./NightSwitch";


// const StyledHeader = styled.div`
//     position: relative;
//     left: -200px;
//     width: 100px;
//     height: 50px;
//     margin-top: 5px;
//     transition: left .2s linear;
//   &:hover {
//     left: 0px;
//   }
//   a {
//     padding: 5px;
//   }
// `

type HeaderPropsType = {
    openMenu: () => void
    setNightModeOn: (isNightModeOn:boolean) => void
    isNightModeOn: boolean
}

const Header:React.FC<HeaderPropsType> = ({openMenu, setNightModeOn, isNightModeOn}) => {

    return (
        <AppBar position="static" color={'primary'} sx={{mb:3}}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={openMenu}
                >
                    <Menu />
                </IconButton>
                <Typography variant={'body1'} component={'div'} sx={{ flexGrow: 1 }}>
                    Level
                </Typography>
                <NightSwitch setNightModeOn={setNightModeOn} isNightModeOn={isNightModeOn}/>
            </Toolbar>
        </AppBar>
    )
}

// style={({isActive}) => ({color: isActive ? "gold" : "white"})}
//             <span>Menu</span>
//         </StyledHeader>
//     )
// }

export default Header
