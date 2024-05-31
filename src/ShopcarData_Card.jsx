import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


export default function ShopcarData_Card({ hotelname, singleroom_num, doubleroom_num,
    singleRoom_price, doubleRoom_price, id, removeRoomdata }) {
    const RemoveData = () => {
        removeRoomdata(id);
    }

    return (
        <ListItem key={id} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={hotelname}
                secondary={
                    <React.Fragment>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 300, mt: 1.5, mb: 1.5 }}>
                            <div>
                                <div>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        單人房
                                    </Typography>
                                    {` — ${singleroom_num} 間`}
                                </div>
                                <div>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        ${singleRoom_price * singleroom_num}
                                    </Typography>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        雙人房
                                    </Typography>
                                    {` — ${doubleroom_num} 間`}
                                </div>
                                <div>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        ${doubleRoom_price * doubleroom_num}
                                    </Typography>
                                </div>
                            </div>
                            <IconButton onClick={RemoveData} color="primary" sx={{ height: 6, width: 6 }}>
                                <CloseIcon />
                            </IconButton>


                        </Box>
                        <Divider />
                    </React.Fragment>

                }
            />
        </ListItem>
    );
}