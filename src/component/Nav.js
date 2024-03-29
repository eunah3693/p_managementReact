import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';

// 이미지
import navLogo from '../images/logowhite.png';

const loopStyles = makeStyles((theme) => ({
    logoBox:{
        padding:"20px 0  20px 30px",
        textAlign:"left",
        "& img":{
            width:"40px"
        }
    },
    list:{
        paddingLeft:"30px",
        paddingBottom:"0",
        "& .MuiTypography-body1":{
            fontSize:"13px"
        },
        "& a":{
            color:"#fff",
            textDecoration:"none"
        },
        "& .on .MuiTypography-root":{
            fontWeight:"bold",
            color:"#fff"
        }
    },
    
}));




function NavLoop(props){
    const classes = loopStyles();
    const data=props.data;

    return(
        
            <List component="nav" aria-label="main mailbox folders">
                <div className={classes.logoBox}>
                    <img src={navLogo}/>
                </div>
                {data.map(function(val,key){
                    return(
                        <ListItem button className={classes.list} key={key}>
                            <Link to={val.link}><ListItemText primary={val.name} className={val.name===props.nameOn?"on":""}/></Link>
                        </ListItem>
                    )
                })}
            </List>

    );
   
}

const useStyles = makeStyles((theme) => ({
    root: {
      height:"100vh",
      width: "250px",
      backgroundColor: theme.palette.primary.main,
      color:"#555"
    },
    menuIconBox:{
        width:"60px",
        height:"100vh",
        backgroundColor: theme.palette.primary.main,
        color:"#fff",
        paddingTop:"20px",
        display:"flex",
        justifyContent:"center"
    }

}));


function Nav(props){
    const isDesktop = useMediaQuery({query: '(min-width: 1240px)'})
    const [state, setState] = React.useState(false);
    const navData = [
        {"name":"공지사항","link":"/notice"},
        {"name":"캘린더","link":"/calendar"},
        {"name":"작업일지","link":"/diary"},
        {"name":"휴가신청","link":"/off"},
        {"name":"전자결재","link":"/pay"},
        {"name":"사용자목록 및 등록","link":""},
        {"name":"개인정보 수정","link":""},
        {"name":"히스토리","link":""},
        {"name":"로그아웃","link":"/"},
    ];
    const classes = useStyles();

        
    const toggleDrawer = () => {
        setState(!state);
    };

    
    return (
        <>
        {/* 웹 */}
        {(isDesktop) &&
            <div className={classes.root}>
                <NavLoop nameOn={props.nameOn} data={navData}></NavLoop>
            </div>
        }
        {/* 태블릿, 모바일 */}
        {!isDesktop&&
          <>
            <div className={classes.menuIconBox}  onClick={toggleDrawer}><MenuIcon fontSize="large"></MenuIcon></div>
            <Drawer  open={state} onClose={toggleDrawer}>
                <div className={classes.root}>
                    <div  className={classes.list} role="presentation" >
                        <NavLoop nameOn={props.nameOn}  data={navData}></NavLoop>
                    </div>
                </div>
            </Drawer>
          </>
        }
        </>

    );
}

export default Nav;