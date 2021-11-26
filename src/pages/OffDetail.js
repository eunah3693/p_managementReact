import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../component/Nav';
import RadioBox from '../component/RadioBox';
import InputBox from '../component/InputBox';
import Datepicker from '../component/Datepicker';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    layout:{
        display:"flex"
    },
    content:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        flexDirection:"column",
        paddingTop:"200px"
    },
    radioBox:{
        width:"800px",
        display:"flex",
        justifyContent:"flex-start",
        paddingBottom:"20px"
    },
    inputBox:{
        paddingBottom:"15px"
    },
    buttonBox:{
        width:"800px",
        display:"flex",
        justifyContent:"flex-end",
        textDecoration:"none",
        paddingTop:"20px",
        "& button":{
            width:"100px",
        }
    }
}));

function OffDetail(){
    const classes = useStyles();
    const location = useLocation()


    const radioData1=["연차","유급휴가","무급휴가"];
    const radioData2=["종일","오전(15시출근)","오후(14시퇴근)"];
    const [data, setData] = useState({
        name:"",
        department:"",
        rank:"",
        position:"",
        offType:"",
        offStart:"",
        offEnd:"",
        offTime:"",
        content:"",
        extra:"",
        phone:"",
        applyDate:"",
        approve1:"",
        approve2:"",
    });
    function changeValue(e, key){
      data[key]=e.target.value;
      setData({...data})
    }

    useEffect(() => {
        if(location.pathname.split("/offDetail/")[1]){ //pathname 있으면 보기, 없으면 등록 
            setData({
                name:"dd",
                department:"",
                rank:"",
                position:"",
                offType:"",
                offStart:"",
                offEnd:"",
                offTime:"",
                content:"",
                extra:"",
                phone:"",
                applyDate:"",
                approve1:"",
                approve2:"",
            })
        }
      }, [location.pathname]);
      
    return (
        <div className={classes.layout}>
          <Nav nameOn="휴가신청"></Nav>
          <form className={classes.content}>
            <div className={classes.inputBox}>
                <InputBox width="800px" multiline={false} rows={1} label="이름" inputValue={data.name} changeValue={(e)=>{changeValue(e,"name")}} ></InputBox>
            </div>
            <div className={classes.inputBox}>
                <InputBox width="800px" multiline={false} rows={1} label="부서" inputValue={data.department} changeValue={(e)=>{changeValue(e,"department")}} ></InputBox>
            </div>
            <div className={classes.radioBox}>
                <RadioBox radioData={radioData1} radioValue={data.type} handleChangeRadio={(e)=>{changeValue(e,"type")}} ></RadioBox>
            </div>
            <div className={classes.radioBox}>
                <Datepicker label="휴가시작일" width="380px" selectedDate={data.offStart} handleDateChange={(e)=>{changeValue(e,"offStart")}}></Datepicker>
                <Datepicker label="휴가종료일" width="380px" selectedDate={data.offEnd} handleDateChange={(e)=>{changeValue(e,"offEnd")}}></Datepicker>
            </div>
            <div className={classes.radioBox}>
                <RadioBox radioData={radioData2} radioValue={data.offTime} handleChangeRadio={(e)=>{changeValue(e,"offTime")}} ></RadioBox>
            </div>
            <div className={classes.inputBox}>
                <InputBox width="800px" multiline={false} rows={5} label="내용" inputValue={data.content} changeValue={(e)=>{changeValue(e,"content")}} ></InputBox>
            </div>
            <div className={classes.inputBox}>
                <InputBox width="800px" multiline={true} rows={2}  label="비고" inputValue={data.extra} changeValue={(e)=>{changeValue(e,"extra")}}></InputBox>
            </div>
            <div className={classes.inputBox}>
                <InputBox width="800px" multiline={false} rows={1}  label="비상연락처" inputValue={data.phone} changeValue={(e)=>{changeValue(e,"phone")}}></InputBox>
            </div>
            <div className={classes.buttonBox}><Button variant="contained">신청</Button></div>
          </form>
        </div>
    );

}

export default OffDetail;