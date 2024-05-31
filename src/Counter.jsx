import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Counter({ name, roomNum, addRoomNum, removeRoomNum }) {

    return (
        <div>
            <p>{name}  {roomNum}</p>
            <Button variant="outlined" onClick={addRoomNum} >
                <AddIcon />
            </Button>
            <Button variant="outlined" onClick={removeRoomNum}>
                <RemoveIcon />
            </Button>
        </div>
    )
}