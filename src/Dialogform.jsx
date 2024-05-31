import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Draggable from 'react-draggable';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Counter from './Counter';



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


export default function Dialogform({ singleroomNum, doubleroomNum, addsingleRoomNum, adddoubleRoomNum,
    hotelname, singleprice, doubleprice, removesingleRoomNum, removedoubleRoomNum,
    DialogformData_clear, addRoomdata }) {

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [roomType, setRoomType] = React.useState('單人房');
    /*
    const [singleRoomNum, setSingleRoomNum] = React.useState(0);
    const [doubleRoomNum, setDoubleRoomNum] = React.useState(0);
    */
    const myRef = React.createRef();
    const SubmitClick = () => {
        if (singleroomNum === 0 && doubleroomNum === 0);
        else {
            addRoomdata(hotelname, singleroomNum, doubleroomNum, singleprice, doubleprice);
            DialogformData_clear();
        }

    }
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

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRoomTypeChange = (event) => {
        setRoomType(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                訂房
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        handleClose();
                    },
                }}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        訂房資訊
                    </DialogContentText>
                    <Counter
                        name={"單人房"}
                        //
                        roomNum={singleroomNum}
                        addRoomNum={addsingleRoomNum}
                        removeRoomNum={removesingleRoomNum}
                    />
                    <Counter
                        name={"雙人房"}
                        //
                        roomNum={doubleroomNum}
                        addRoomNum={adddoubleRoomNum}
                        removeRoomNum={removedoubleRoomNum}
                    />


                </DialogContent>
                <DialogActions>
                    <Button type="submit" onClick={SubmitClick}>確定</Button>
                    <Button onClick={handleClose}>取消</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}