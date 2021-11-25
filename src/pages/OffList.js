import React, { Component } from 'react';
import Nav from '../component/Nav';
import SelectBox from '../component/SelectBox';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TableLoop from '../component/TableLoop';
import WorkerInfo from './WorkerInfo';
import HolidayInfo from './HolidayInfo';

const useStyles = makeStyles((theme) => ({
    layout:{
        display:"flex",
        "& a":{
            textDecoration:"none"
        }
    },
    content:{
        width:"100%",
        display:"flex",
    },
    sortingBox:{
        width:"80%",
        padding:"20px",
        marginTop:"50px",
        marginBottom:"20px",
        display:"flex",
        justifyContent:"space-between",
        "& .MuiInput-underline:after":{
            borderBottom:"1px solid rgba(0, 0, 0, 0.42)"
        },
        "& .MuiFormLabel-root.Mui-focused":{
            color:"rgba(0, 0, 0, 0.42)"
        },
        "& .MuiListItem-button":{
            backgroundColor:"#fff"
        }
    },
    left:{
        width:"30%",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
    },
    box:{
        width:"80%"
    },
    right:{
        width:"70%",
    }
}));

let dataTitle=["INDEX","신청자","휴가기간","휴가종류","휴가이름","연락처","신청일","관리부","대표"];
let data=[
    {
        "index":1,
        "worker":"김은아",
        "duration":"2021-10-20~2021-10-20",
        "offType":"무급휴가",
        "offName":"종일",
        "phone":"010-0000-0000",
        "applyDate":"2021-09-01",
        "approve1":1,        
        "approve2":1,        
    }
];


function Notice(){
    const classes = useStyles();
    const year=[2020,2021,2022];
    const month=[1,2,3,4,5,6,7,8,9,10,11,12];
    const [option, setOption] = React.useState([0,0]); //년도, 월 selectbox
    const changeSelect = (event,idx) => {
        // option[idx]=event.target.value;
        // setOption(option);
        setOption(option);
    };
    console.log(option)
    return (
        <div className={classes.layout}>
          <Nav nameOn="휴가신청"></Nav>
          <div className={classes.content}>
            <div className={classes.left}>
                <Card className={classes.sortingBox}>
                    <SelectBox width="100px" label="YEAR" selectData={year} option={option[0]} changeSelect={(e)=>{changeSelect(e,0)}}></SelectBox>
                    <SelectBox width="100px" label="MONTH" selectData={month} option={option[1]} changeSelect={(e)=>{changeSelect(e,1)}}></SelectBox>
                    <Link to={"/offDetail"} className={classes.buttonBox}><Button variant="contained">휴가신청</Button></Link>
                </Card>
                <div className={classes.box}>
                    <WorkerInfo></WorkerInfo>
                </div>
                <div className={classes.box}>
                    <HolidayInfo></HolidayInfo>
                </div>
            </div>
            <div className={classes.right}>
                <TableLoop dataTitle={dataTitle} data={data} link="offDetail"></TableLoop>
            </div>
          </div>
        </div>
    );

}

export default Notice;