import './WebFooter.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function WebFooter() {
    return (
        <div className="footer">
            <Typography sx={{ ml: 2, flex: 1, color: '#90caf9' }} variant="body2" component="div">
                @hotel
            </Typography>
        </div >
    )
}