import React from 'react';
import {useNavigate} from "react-router-dom";
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";

type NavigationPropsType = {
    open: boolean
    closeMenu: () => void
}

export const Navigation: React.FC<NavigationPropsType> = ({open, closeMenu}) => {
    const navigate = useNavigate()
    return (
        <><Drawer
            anchor='top'
            open={open}
            onClose={closeMenu}
            PaperProps={{
                sx: {width: "12%"},
            }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/pre-junior', { replace: true })}>
                        <ListItemText primary="Pre-Junior"/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/junior', { replace: true })}>
                        <ListItemText primary="Junior"/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => navigate('/junior-plus', { replace: true })}>
                        <ListItemText primary="Junior+"/>
                    </ListItemButton>
                </ListItem>
            </List>

            </Drawer>
        </>
    )
        ;
};