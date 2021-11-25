import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  layout:{
    width:"100%",
    padding:"20px"
  },
  flex:{
    width:"100%",
    display:"flex",
    alignItems:"center"
  },
  workerkList:{
    width:"100%",
    "& li":{
        listStyle:"none"
    },
    "& button":{
        minWidth:"70px",
        height:"34px",
        fontSize:"13px",
        padding:"3px 10px",
        marginRight:"3px"
    }
  },
  workerBox:{
      display:"flex",
      paddingLeft:"5px",
      margin:"5px 0"
  }
}));
let workerData=[
    {
        "team":"GU",
        "name":["김범수","김택수"]
    },
    {
        "team":"마케팅",
        "name":["박준수","장민호","강승찬","송채린"]
    },
    {
        "team":"디자인",
        "name":["박다영","이선미"]
    },
    {
        "team":"개발",
        "name":["김주현","정인성","류여정","김은아"]
    },
    {
        "team":"영상",
        "name":["천신애","장윤주","김희경"]
    },
]
function WorkerInfo(){
  const classes = useStyles();


  return (
    <Card className={classes.layout}>
        <div className={classes.workerkList}>
            {workerData.map(function(val,idx){
                return (
                     <div className={classes.flex}>
                         <Button variant="contained" className={classes.dark}>{val.team}</Button>  
                         <ul className={classes.workerBox}>   
                            {val.name.map(function(item,idx){
                                return (
                                    <li>
                                        <Button variant="outlined" className={classes.dark}>{item}</Button>  
                                    </li>
                                );  
                            })}          
                         </ul>
                     </div>
                     );
            })}
        </div>
    </Card>
  );
}

export default WorkerInfo;