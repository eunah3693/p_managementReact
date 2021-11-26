import React, { Component } from 'react';
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

const useStyles = makeStyles((theme) => ({
    layout:{
        "& a":{
            textDecoration:"none"
        }
    },
    noticeTable:{
        width:"90%",
        marginTop:"50px",
        fontSize:"15px",
        "& .MuiTableCell-root a":{
            color:"rgba(0, 0, 0, 0.87)"
        }
    },
    paginationBox:{
        paddingTop:"30px",
        display:"flex",
        justifyContent:"center"
    },
    firstColumn:{
        textAlign:"center"
    },
}));

function TableLoop(props){
    const classes = useStyles();
    let {dataTitle, data , link}=props;
    return (
        <div className={classes.layout}>
            <TableContainer component={Paper} className={classes.noticeTable}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {dataTitle.map(function(val,idx){
                                return (
                                    <TableCell align="center">{val}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>    
                            {data.map((val,idx) => (
                                Object.values(val).map((items,idx) => (
                                    <TableCell align="center">{items}</TableCell>
                                ))
                            ))}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className={classes.paginationBox}>
                 <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
        </div>
    );

}

export default TableLoop;