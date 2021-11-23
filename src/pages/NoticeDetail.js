import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../component/Nav';
import RadioBox from '../component/RadioBox';
import InputBox from '../component/InputBox';
import InputFile from '../component/InputFile';
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
        paddingTop:"100px"
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

function NoticeDetail(){
    const classes = useStyles();
    const location = useLocation()


    const radioData=["전체공지","취업규칙","서류양식"];
    const [data, setData] = useState({
        type:"전체공지",
        title:"",
        content:"",
        writer:"",
        sFile:""
    });
    function changeValue(e, key){
      data[key]=e.target.value;
      setData({...data})
    }

    useEffect(() => {
        if(location.pathname.split("/noticeDetail/")[1]){ //pathname 있으면 보기, 없으면 등록 
            setData({
                type:"취업규칙",
                title:"title",
                content:"content",
                writer:"writer",
                sFile:""
            })
        }
      }, [location.pathname]);
      
    return (
        <div className={classes.layout}>
          <Nav nameOn="공지사항"></Nav>
          <form className={classes.content}>
            <div className={classes.radioBox}>
                <RadioBox radioData={radioData} radioValue={data.type} handleChangeRadio={(e)=>{changeValue(e,"type")}} ></RadioBox>
            </div>
            <div className={classes.inputBox}>
                <InputBox width="800px" multiline={false} rows={1} label="공지제목" inputValue={data.title} changeValue={(e)=>{changeValue(e,"title")}} ></InputBox>
            </div>
            <div className={classes.inputBox}>
                <InputBox width="800px" multiline={true} rows={20}  label="공지내용" inputValue={data.content} changeValue={(e)=>{changeValue(e,"content")}}></InputBox>
            </div>
            <div className={classes.inputBox}>
                <InputBox width="800px" multiline={false} rows={1}  label="작성자" inputValue={data.writer} changeValue={(e)=>{changeValue(e,"writer")}}></InputBox>
            </div>
            <div className={classes.inputBox}>
                <InputFile label="양식첨부"></InputFile>
            </div>
            <div className={classes.buttonBox}><Button variant="contained">공지등록</Button></div>
          </form>
        </div>
    );

}

export default NoticeDetail;