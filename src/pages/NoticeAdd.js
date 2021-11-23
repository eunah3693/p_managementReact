import React, { useState } from 'react';
import Nav from '../component/Nav';
import RadioBox from '../component/RadioBox';
import InputBox from '../component/InputBox';
import InputFile from '../component/InputFile';
import { makeStyles } from '@material-ui/core/styles';


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
    }
}));

function NoticeAdd(){
    const classes = useStyles();
    const radioData=["전체공지","취업규칙","서류양식"];
    const [data, setData] = useState({
        type:"",
        title:"",
        content:"",
        writer:"",
        sFile:""
    });
    function changeValue(e,type){
        setData({...data, "title":e.target.value});
    }
    return (
        <div className={classes.layout}>
          <Nav nameOn="공지사항"></Nav>
          <div className={classes.content}>
            <RadioBox radioData={radioData}></RadioBox>
            <InputBox width="800px" multiline={false} rows={1} label="공지제목" inputValue={data.title} changeValue={changeValue} ></InputBox>
            <InputBox width="800px" multiline={true} rows={4}  label="공지내용"></InputBox>
            <InputBox width="800px" multiline={false} rows={1}  label="작성자"></InputBox>
            <InputFile label="양식첨부"></InputFile>
          </div>
        </div>
    );

}

export default NoticeAdd;