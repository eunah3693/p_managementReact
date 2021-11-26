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
        padding:"20px 20px",
    },
    sortingWrap:{
        width:"90%",
        display:"flex",
    },
    sortingBox:{
        width:"22%",
        padding:"20px",
        marginBottom:"10px",
        display:"flex",
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
    tableBox:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        "& >div":{
            width:"90%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }
    }
}));

let dataTitle=["INDEX","종류","신청자","신청일","팀장","관리부","대표"];
let data=[
    {
        "index":1,
        "type":"지출결의서",
        "writer":"김은아",
        "applyDate":"2021-09-01",
        "approve1":1,
        "approve2":1,
        "approve3":0,   
    }
];


function PayList(){
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
          <Nav nameOn="전자결재"></Nav>
          <div className={classes.content}>
                <div className={classes.sortingWrap}>
                    <SelectBox width="100px" label="결재작성" selectData={year} option={option[0]} changeSelect={(e)=>{changeSelect(e,0)}}></SelectBox>
                </div>
                <div className={classes.tableBox}>
                    <TableLoop dataTitle={dataTitle} data={data} link="offDetail"></TableLoop>
                </div>
          </div>
        </div>
    );

}

export default PayList;