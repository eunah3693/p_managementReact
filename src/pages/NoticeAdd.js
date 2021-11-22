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
        flexDirection:"column"
    }
}));

let data=[{
    "index":1,
    "type":"전체공지",
    "title":"title",
    "content":"content",
    "sFile":[{"file":"/img/pencil1.png"},{"file":"/img/pencil2.png"}],
    "writer":"writer",
    "date":"2021-09-01"
},
{
    "index":2,
    "type":"전체공지",
    "title":"title",
    "content":"content",
    "sFile":[],
    "writer":"writer",
    "date":"2021-09-01"
}];

function NoticeAdd(){
    const classes = useStyles();
    const radioData=["전체공지","취업규칙","서류양식"];
    const [titleValue, titleValueSet] = useState("");
    function changeValue(e){
        titleValueSet(e.target.value);
    }
    return (
        <div className={classes.layout}>
          <Nav nameOn="공지사항"></Nav>
          <div className={classes.content}>
            <RadioBox radioData={radioData}></RadioBox>
            <InputBox width="800px" multiline={false} rows={1} label="공지제목" inputValue={titleValue} changeValue={changeValue} ></InputBox>
            <InputBox width="800px" multiline={true} rows={4}  label="공지내용"></InputBox>
            <InputBox width="800px" multiline={false} rows={1}  label="작성자"></InputBox>
            <InputFile label="양식첨부"></InputFile>
          </div>
        </div>
    );

}

export default NoticeAdd;