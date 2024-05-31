import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShopcarData_Card from './ShopcarData_Card';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from 'react';

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function HotelShopCar({ roomDatabase_list, removeRoomdata, addOrderdata,
    RecalculateHoteldata, orderDatabase_list }) {
    const [open, setOpen] = React.useState(false);
    let sum = 0;
    for (let i = 0; i < roomDatabase_list.length; i++) {
        sum = sum + parseInt(roomDatabase_list[i].singleRoom) * parseInt(roomDatabase_list[i].singleRoom_price);
        sum = sum + parseInt(roomDatabase_list[i].doubleRoom) * parseInt(roomDatabase_list[i].doubleRoom_price);
    }


    const handleClickOpen = () => {
        setOpen(true);
    };
    let data_empty = false;

    const handleClose = () => {
        setOpen(false);
    };

    const SubmitClose = () => {
        addOrderdata();
        setOpen(false);
    };


    if (roomDatabase_list.length === 0) {
        data_empty = true;
    }

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                <AddShoppingCartIcon />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    預定飯店
                </DialogTitle>
                <DialogContent sx={{ mr: 7, ml: 1 }}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {!data_empty && roomDatabase_list.map((roomDatabase) => (
                            <ShopcarData_Card
                                hotelname={roomDatabase.hotelname}
                                singleroom_num={roomDatabase.singleRoom}
                                doubleroom_num={roomDatabase.doubleRoom}
                                singleRoom_price={roomDatabase.singleRoom_price}
                                doubleRoom_price={roomDatabase.doubleRoom_price}
                                id={roomDatabase.id}
                                removeRoomdata={removeRoomdata}
                            />
                        ))}
                        {!data_empty && <ListItem alignItems="flex-start">
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                合計: 總共 {sum}$ 元
                            </Typography>
                        </ListItem>}
                        {data_empty && <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            無訂單
                        </Typography>}
                    </List >
                </DialogContent>
                <DialogActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    {!data_empty && <Button onClick={SubmitClose}>訂單下定</Button>}
                    <Button autoFocus onClick={handleClose}>
                        取消
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}