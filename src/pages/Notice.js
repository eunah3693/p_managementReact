import React, { Component } from 'react';
import Nav from '../component/Nav';
import SelectBox from '../component/SelectBox';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

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
        alignItems:"center",
        flexDirection:"column"
    },
    noticeTable:{
        width:"80%",
        marginTop:"50px",
        fontSize:"15px",
        "& .MuiTableCell-root a":{
            color:"rgba(0, 0, 0, 0.87)"
        }
    },
    paginationBox:{
        paddingTop:"30px"
    },
    firstColumn:{
        textAlign:"center"
    },
    sortingBox:{
        width:"80%",
        marginTop:"50px",
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
    buttonBox:{
        marginTop:"25px",
        display:"flex",
        justifyContent:"flex-end"
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

function Notice(){
    const classes = useStyles();
    const selectData=["취업공지","취업규칙","서류양식"];
    const [option, setOption] = React.useState(''); //selectbox
    const changeSelect = (event) => {
        setOption(event.target.value);
    };
    return (
        <div className={classes.layout}>
          <Nav nameOn="공지사항"></Nav>
          <div className={classes.content}>
            <div className={classes.sortingBox}>
                <SelectBox width="130px" selectData={selectData} option={option} changeSelect={changeSelect}></SelectBox>
                <Link to={"/noticeDetail"} className={classes.buttonBox}><Button variant="contained">공지추가</Button></Link>
            </div>
            <TableContainer component={Paper} className={classes.noticeTable}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">INDEX</TableCell>
                            <TableCell align="center">공지종류</TableCell>
                            <TableCell align="center">공지제목</TableCell>
                            <TableCell align="center">작성자</TableCell>
                            <TableCell align="center">공지일</TableCell>
                            <TableCell align="center">수정</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((val,idx) => (
                            <TableRow key={idx}>
                                    <TableCell className={classes.firstColumn} component="th" scope="row">{idx+1}</TableCell>
                                    <TableCell align="center">{val.type}</TableCell>
                                    <TableCell align="center">
                                        <Link to={"/noticeDetail/"+idx}  className={classes.tableLink}>{val.title}</Link>
                                    </TableCell>
                                    <TableCell align="center">{val.writer}</TableCell>
                                    <TableCell align="center">{val.date}</TableCell>
                                    <TableCell align="center">수정</TableCell>
                            </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.paginationBox}>
                 <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
          </div>
        </div>
    );

}

export default Notice;