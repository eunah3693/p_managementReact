import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    loginBox:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"auto",
        "& div":{
            height:"30%"
        },
    },
    formBox: {
        width:"350px",
        padding:"50px 0",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },
    formInput:{
        width:"70%",
        marginBottom:"20px"
    },
    loginButton:{
        marginTop:"15px",
        backgroundColor:theme.palette.grey[700],
        width:"100px",
        color:"#fff"
    }
}));


function Login() {
    const classes = useStyles();
    const [data, setData] = useState({
        "id":"",
        "pw":""
    });
    let history = useHistory();
    function submitId(e){
        console.log(data);
        history.push("/notice");
    }
    return (
        <div className={classes.loginBox}>
            <Card>
                <form  className={classes.formBox}>
                    <TextField className={classes.formInput} name="id" value={data.id}  placeholder="ID" onChange={(e)=>setData({...data, "id":e.target.value})}/>
                    <TextField className={classes.formInput} name="pw" value={data.pw}  placeholder="PASSWORD"  onChange={(e)=>setData({...data, "pw":e.target.value})}/>
                    <Button className={classes.loginButton}  variant="contained" onClick={submitId}>LOGIN</Button>
                </form>
            </Card>
        </div>
    );
  }

export default Login;

