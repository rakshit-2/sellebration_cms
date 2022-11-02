import './index.css';
import logo from './../../images/logo.png'
import { useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


const Delete=(props)=>{
    const navigate = useNavigate();

    const[showDelete,setShowDelete]=useState("none")
    useEffect(() => {
        if(props.login===true)
        {
            setShowDelete("flex")
        }
      }, []);



    const tableData=[
        {id:0,label:"Home_LatestNews"},
        {id:1,label:"Innovation_Card"},
        {id:2,label:"Innovation_Insight"},
        {id:3,label:"Leadership_Director"},
        {id:4,label:"Leadership_Head"},
        {id:5,label:"Leadership_Leader"},
        {id:6,label:"Leadership_Vanguard"},
        {id:7,label:"OurStories_Csr"},
        {id:8,label:"OurStories_Leadership"},
        {id:9,label:"OurStories_Recommended"},
        {id:10,label:"OurStories_Csr"},
        {id:11,label:"OurStories_Sustainability"},
        {id:12,label:"Women_Leadership_Better_Together"},
        {id:13,label:"Women_Leadership_Redefining_Boundaries"},
        {id:14,label:"event"},
        {id:15,label:"investor_Company"},
        {id:16,label:"investor_update"},
        {id:17,label:"mediarelease"},
        {id:18,label:"pressreport"},
        {id:19,label:"stories"},
        {id:20,label:"Download_Log"},
        {id:21,label:"Download_Company"},
    ]
    const[id,setId]=useState(-1)
    const[name,setName]=useState("")


    function deleteClicked()
    {
        if(id===-1 || name==="")
        {
            alert("fill field correctly")
        }
        else
        {
            Axios.post('http://localhost:5000/delete/post',
            {
                name:name,
                id:id,
            }).then((res)=>{
                console.log(res)
                alert(name+" tables row id: "+id+" deleted")
            });
        }
    }

return (
    <>
    <div className='delete__outer' style={{display:showDelete}}>
        <div className='delete__inner'>
            <div className='delete__inner__inner' >
                <div className='delete__inner__inner__img' onClick={()=>{navigate('/')}}>
                    <img src={logo} style={{width:"100%",height:"100%"}} />
                </div>
                <div className="name-outer">
                    <div className="name-label"  style={{color:"white"}}>
                        Table Name{'\u00A0'}<i style={{color:"white",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                    </div>
                    <Autocomplete
                    disablePortal
                    defaultValue={null}
                    className="name-field"
                    style={{height:"fit-content",backgroundColor:"white",borderRadius:"5px",paddingLeft:"0px",fontFamily:"Oswald, sans-serif",fontSize:"12px"}}
                    id="combo-box-demo"
                    placeholder={"table name"}
                    options={tableData}
                    value={name}
                    onChange={(event: any, newVal:string | null)=>setName(newVal.label)}
                    renderInput={(params) => <TextField {...params} label="" />}
                    />
                </div>
                <div className='name-outer'>
                    <div className="name-label"  style={{color:"white"}}>
                        id{'\u00A0'}<i style={{color:"white",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                    </div>
                    <input  onChange={(e)=>{setId(e.target.value)}} style={{backgroundColor:"white",fontWeight:"600"}} type="number" placeholder={"id"} className="name-field"  required='required'/>
                </div>
                <div className='submit'>
                    <div className='submit__button' onClick={()=>{deleteClicked()}}>
                        Submit
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
);
}

export default Delete;