import './index.css';
import logo from './../../images/logo.png'
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login=(props)=>{


    const[username,setUsername]=useState("")
    const[pass,setPass]=useState("")
    const navigate = useNavigate();
    function loginClicked()
    {
        Axios.get('http://localhost:5000/checklogin',
        {
            params:{
                username:username,
                pass:pass
            }
        }).then((res)=>{
            if(res.data===true)
            {
                props.changeLogin(true)
                navigate('/delete')
            }
            else
            {
                props.changeLogin(false)
            }
        });
    }


return (
    <>
    <div class="login-page">
        <div class="form">
            <form class="login-form">
                <div className='login__img'>
                    <img src={logo} style={{width:"100%",height:"100%"}}/>
                </div>
                <input type="text" placeholder="username"  onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="password" placeholder="password" onChange={(e)=>{setPass(e.target.value)}}/>
                <div className="button" onClick={()=>{loginClicked()}}>login</div>
            </form>
        </div>
    </div>
    </>
);
}

export default Login;