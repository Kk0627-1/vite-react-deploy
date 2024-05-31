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
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { blue, yellow } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Counter from './Counter';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    width: '400px',
    height: '400px'
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function ExpandPage({ hotelname, imgName, singleroomNum, doubleroomNum,
    addsingleRoomNum, adddoubleRoomNum, singleprice, doubleprice, removesingleRoomNum,
    removedoubleRoomNum, ExpandPageData_clear, addRoomdata }) {

    const [open, setOpen] = React.useState(false);
    /*
    const [singleRoomNum, setSingleRoomNum] = React.useState(0);
    const [doubleRoomNum, setDoubleRoomNum] = React.useState(0);
    */
    let Imgname = "./img/" + imgName + ".jpg";
    const SubmitClick = () => {
        if (singleroomNum === 0 && doubleroomNum === 0);
        else {
            addRoomdata(hotelname, singleroomNum, doubleroomNum, singleprice, doubleprice);
            ExpandPageData_clear();
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /*
    const addSingleRoomNum = () => {
        setSingleRoomNum((preNum) => preNum + 1);
    }

    const addDoubleRoomNum = () => {
        setDoubleRoomNum((preNum) => preNum + 1);
    }

    const removeSingleRoomNum = () => {
        setSingleRoomNum((preNum) => {
            if (preNum !== 0) preNum = preNum - 1;
            return preNum;
        });
    }

    const removeDoubleRoomNum = () => {
        setDoubleRoomNum((preNum) => {
            if (preNum !== 0) preNum = preNum - 1;
            return preNum;
        });
    }
    */

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                <ZoomOutMapIcon />
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                className='.MuiDialog-container'
                PaperProps={{
                    style: {
                        backgroundColor: '#4a148c',
                    }
                }}
            >
                <AppBar sx={{ position: 'relative', bgcolor: '#212121' }} >
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

                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Toolbar>
                </AppBar>
                <Container sx={{ mt: 4.7, mb: 2 }} maxWidth='xl'  >
                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            flexGrow: 1,
                            width: 1420,
                            height: 540,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff'
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item>
                                <Grid container spacing={6} direction="column">
                                    <Grid item>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {hotelname}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ flexGrow: 1, width: 600, height: 500 }}>
                                            <ButtonBase sx={{ width: 500, height: 300, mb: 1 }}>
                                                <Img sx={{ width: 500, height: 300 }} alt="complex" src={Imgname} />
                                            </ButtonBase>
                                            <ButtonBase sx={{ width: 240, height: 100, mr: 2 }}>
                                                <Img sx={{ width: 250, height: 100 }} alt="complex" src={Imgname} />
                                            </ButtonBase>
                                            <ButtonBase sx={{ width: 240, height: 100 }}>
                                                <Img sx={{ width: 250, height: 100 }} alt="complex" src={Imgname} />
                                            </ButtonBase>
                                        </Box>

                                        {/*
                                        <Img sx={{ width: 500, height: 500 }} alt="complex" src={Imgname} />
                                        *}
                                        {/*
                                        <ButtonBase sx={{ width: 500, height: 500 }}>
                                            <Img alt="complex" src={Imgname} />
                                        </ButtonBase>
                                        */}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm >
                                <Grid item xs container direction="column" spacing={14}>
                                    <Grid item xs>
                                        <Typography variant="body2" gutterBottom>
                                            Full resolution 1920x1080 • JPEG
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            ID: 1030114
                                        </Typography>
                                        <Typography variant="subtitle1" component="div">
                                            $19.00
                                        </Typography>

                                    </Grid>
                                    <Grid item>
                                        <Counter
                                            name={"單人房"}
                                            roomNum={singleroomNum}
                                            addRoomNum={addsingleRoomNum}
                                            removeRoomNum={removesingleRoomNum}
                                        />
                                        <Counter
                                            name={"雙人房"}
                                            roomNum={doubleroomNum}
                                            addRoomNum={adddoubleRoomNum}
                                            removeRoomNum={removedoubleRoomNum}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined"  >
                                            <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={SubmitClick}>
                                                Subscribe
                                            </Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>


                {/*
                <List>
                    <ListItemButton>
                        <ListItemText primary="Phone ringtone" secondary="Titania" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                    </ListItemButton>
                </List>
                                    */}
            </Dialog>
        </React.Fragment>
    );
}