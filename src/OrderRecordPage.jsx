import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import OrderRecordPage_Card from './OrderRecordPage_Card';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function OrderRecordPage({ orderDatabase_list }) {
    const [open, setOpen] = React.useState(false);
    let data_empty = false;
    let sum = 0;
    if (orderDatabase_list.length === 0) {
        data_empty = true;
    }

    for (let i = 0; i < orderDatabase_list.length; i++) {
        sum = sum + parseInt(orderDatabase_list[i].singleRoom) * parseInt(orderDatabase_list[i].singleRoom_price);
        sum = sum + parseInt(orderDatabase_list[i].doubleRoom) * parseInt(orderDatabase_list[i].doubleRoom_price);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                <CalendarMonthIcon />
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            訂單紀錄
                        </Typography>
                    </Toolbar>
                </AppBar>
                <List>
                    {!data_empty && orderDatabase_list.map((orderDatabase) => (
                        <OrderRecordPage_Card
                            hotelname={orderDatabase.hotelname}
                            singleroom_num={orderDatabase.singleRoom}
                            doubleroom_num={orderDatabase.doubleRoom}
                            singleRoom_price={orderDatabase.singleRoom_price}
                            doubleRoom_price={orderDatabase.doubleRoom_price}
                            id={orderDatabase.id}
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
                </List>
                {data_empty && <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    無訂單紀錄
                </Typography>}
            </Dialog>
        </React.Fragment>
    );
}