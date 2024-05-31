import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OrderPage from './OrderPage';
import ExpandPage from './ExpandPage';
import Dialogform from './Dialogform';
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

const StarRank = (rank) => {
    let star = "";
    for (let i = rank; i > 0; i--) {
        star = star + "⭐";
    }

    return star;
}


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function HotelItem({ imgName, hotelname, rank, singleprice, doubleprice, singleRoom, doubleRoom, addRoomdata }) {
    const [expanded, setExpanded] = React.useState(false);


    /*
    setAa(aa + 1);
    useEffect(() => {
      console.log('zzzzzzzzzzz');
    }, [aa]);
    */
    /*
    const [singleRoomNum, setSingleRoomNum] = React.useState(0);
    const [doubleRoomNum, setDoubleRoomNum] = React.useState(0);
    */
    const [Dialogform_singleRoomNum, Dialogform_setSingleRoomNum] = React.useState(0);
    const [Dialogform_doubleRoomNum, Dialogform_setDoubleRoomNum] = React.useState(0);
    const [ExpandPage_singleRoomNum, ExpandPage_setSingleRoomNum] = React.useState(0);
    const [ExpandPage_doubleRoomNum, ExpandPage_setDoubleRoomNum] = React.useState(0);
    const DialogformData_clear = () => {
        Dialogform_setSingleRoomNum(0);
        Dialogform_setDoubleRoomNum(0);
    }

    const Dialogform_addSingleRoomNum = () => {
        Dialogform_setSingleRoomNum((preNum) => preNum + 1);
    }

    const Dialogform_addDoubleRoomNum = () => {
        Dialogform_setDoubleRoomNum((preNum) => preNum + 1);
    }

    const Dialogform_removeSingleRoomNum = () => {
        Dialogform_setSingleRoomNum((preNum) => {
            if (preNum !== 0) preNum = preNum - 1;
            return preNum;
        });
    }

    const Dialogform_removeDoubleRoomNum = () => {
        Dialogform_setDoubleRoomNum((preNum) => {
            if (preNum !== 0) preNum = preNum - 1;
            return preNum;
        });
    }

    const ExpandPageData_clear = () => {
        ExpandPage_setSingleRoomNum(0);
        ExpandPage_setDoubleRoomNum(0);
    }

    const ExpandPage_addSingleRoomNum = () => {
        ExpandPage_setSingleRoomNum((preNum) => preNum + 1);
    }

    const ExpandPage_addDoubleRoomNum = () => {
        ExpandPage_setDoubleRoomNum((preNum) => preNum + 1);
    }

    const ExpandPage_removeSingleRoomNum = () => {
        ExpandPage_setSingleRoomNum((preNum) => {
            if (preNum !== 0) preNum = preNum - 1;
            return preNum;
        });
    }

    const ExpandPage_removeDoubleRoomNum = () => {
        ExpandPage_setDoubleRoomNum((preNum) => {
            if (preNum !== 0) preNum = preNum - 1;
            return preNum;
        });
    }

    let Imgname = "./img/" + imgName + ".jpg";
    /*
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    */

    return (
        <Card sx={{ maxWidth: 345, width: 345, mt: 5, ml: 0.8, mr: 0.8 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={hotelname}
                subheader={StarRank(rank)}
            />
            <CardMedia
                component="img"
                width="345"
                height="194"
                image={Imgname}
                alt="Paella dish"
            />
            <CardContent>
                <Box sx={{ mb: 1, mt: 1 }}>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            單人房:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            價格: 一個晚上/${singleprice}<br></br>
                            剩餘房數:{singleRoom}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            雙人房:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body2" color="text.secondary">
                            價格: 一個晚上/${doubleprice}<br></br>
                            剩餘房數:{doubleRoom}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Dialogform singleroomNum={Dialogform_singleRoomNum}
                    doubleroomNum={Dialogform_doubleRoomNum}
                    addsingleRoomNum={Dialogform_addSingleRoomNum}
                    adddoubleRoomNum={Dialogform_addDoubleRoomNum}
                    hotelname={hotelname}
                    singleprice={singleprice}
                    doubleprice={doubleprice}
                    removesingleRoomNum={Dialogform_removeSingleRoomNum}
                    removedoubleRoomNum={Dialogform_removeDoubleRoomNum}
                    DialogformData_clear={DialogformData_clear}
                    addRoomdata={addRoomdata}
                />
                <ExpandPage hotelname={hotelname}
                    imgName={imgName}
                    singleroomNum={ExpandPage_singleRoomNum}
                    doubleroomNum={ExpandPage_doubleRoomNum}
                    addsingleRoomNum={ExpandPage_addSingleRoomNum}
                    adddoubleRoomNum={ExpandPage_addDoubleRoomNum}
                    singleprice={singleprice}
                    doubleprice={doubleprice}
                    removesingleRoomNum={ExpandPage_removeSingleRoomNum}
                    removedoubleRoomNum={ExpandPage_removeDoubleRoomNum}
                    ExpandPageData_clear={ExpandPageData_clear}
                    addRoomdata={addRoomdata}
                />
                {/*
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            */}
            </CardActions>
            {/*
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        */}
        </Card>
    );
}