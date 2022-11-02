


import * as React from 'react';
import Axios from 'axios';
import { useState,useEffect } from 'react';
import LoadingScreen from '../loadingScreen';




const Leadership_Vanguard=(props)=> {

    const greyButton="rgb(98, 101, 97)";
    const selectedButton="rgb(255, 89, 6)";


    const[display,setDisplay]=useState({
                                        post:"flex",
                                        postColor:selectedButton,
                                        get:"none",
                                        getColor:greyButton,
                                        del:"none",
                                        delColor:greyButton,
    })


    const[name,setName]=useState("");

    function submitPost()
    {
        if(name=="")
        {
            alert("Fill the name correctly");
            return;
        }

        Axios.post('http://localhost:5000/leadership/post',
        {
            name:name,
            checkVal:'vanguard'
        }).then((res)=>{
            console.log(res)
            alert("Data Posted")
        });
    }





    const [getRes,setGetRes]=useState([])
    const [loadingGet,setLoadingGet]=useState(false)
    function getData()
    {
        setLoadingGet(true)
        Axios.get('http://localhost:5000/leadership/get',
        {
            params:{
                checkVal:'vanguard'
            }
        }).then((res)=>{
            var a=JSON.stringify(res.data);
            var checka=a.split("}")
            console.log(checka)
            setGetRes(checka)
            console.log(getRes)
            setLoadingGet(false)
        });
    }





    const [id,setId]=useState("");

    function delData()
    {
        Axios.post('http://localhost:5000/home/ourStorie/recommended-del',
        {
            id:id,
        }).then((res)=>{
            console.log(res)
            alert("Data Row Deleted")
        });
    }



  return (
    <>
    <p id="home_recommended"></p>
    <div className="page__each__outer">
        <div className="page__each__heading">
            Leadership Vanguard
        </div>
        <div className="page__each__panel">
            <div className="page__each__panel__each" style={{backgroundColor:display.postColor}} onClick={()=>{setDisplay({post:"flex",get:"none",del:"none",postColor:selectedButton,getColor:greyButton,delColor:greyButton})}}>
                POST
            </div>
            <div className="page__each__panel__each"  style={{backgroundColor:display.getColor}} onClick={()=>{setDisplay({post:"none",get:"flex",del:"none",postColor:greyButton,getColor:selectedButton,delColor:greyButton})}}>
                GET
            </div>
        </div>
        <div className='page__each__content' style={{display:display.post}}>
            <div className='name-outer'>
                <div className="name-label">
                    Name{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                </div>
                <input  onChange={(e)=>{setName(e.target.value)}} type="text" placeholder={"name"} className="name-field"  required='required'/>
            </div>
            <div className='submit'>
                <div className='submit__button' onClick={()=>{submitPost()}}>
                    Submit
                </div>
            </div>
        </div>
        <div className='page__each__content' style={{display:display.get}}>
            <div className='page__each__content__get'>
                {
                loadingGet===true ?(
                    <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <LoadingScreen/>
                    </div>
                ):(
                    <div style={{width:"100%",height:"100%"}} id="check-get">
                        {getRes.map((ele)=>{
                            return(
                                <p>
                                    {ele}
                                </p>
                            )
                        })}
                    </div>
                )
                }
                
            </div>
            <div className='submit' style={{width:"90%"}}>
                <div className='submit__button' onClick={()=>{getData()}}>
                    Get Data
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Leadership_Vanguard;
