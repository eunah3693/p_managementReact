import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const locationStyles = makeStyles((theme) => ({
    locationWrap:{
        width:"100%",
        padding:"30px",
        backgroundColor: theme.palette.primary.secondary,
        fontSize:"20px"
    },
}));

function Location(props){
    const classes = locationStyles();
    
    return (
        <div className={classes.locationWrap}>
            {props.location}
        </div>

    );
}

export default Location;