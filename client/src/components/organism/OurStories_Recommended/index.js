


import * as React from 'react';
import Axios from 'axios';
import { useState,useEffect } from 'react';





const OurStories_Recommended=(props)=> {

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


    const[title,setTitle]=useState("");
    const[link,setLink]=useState("");
    const[date,setDate]=useState("");
    const[time,setTime]=useState("");
    const[img,setImg]=useState("");
    const[info,setInfo]=useState("");

    function submitPost()
    {
        if(title=="")
        {
            alert("Fill the title correctly");
            return;
        }
        if(link=="")
        {
            alert("Fill the link correctly");
            return;
        }
        if(date=="")
        {
            alert("Fill the date correctly");
            return;
        }
        if(time=="")
        {
            alert("Fill the time correctly");
            return;
        }
        if(img=="")
        {
            alert("Fill the image correctly");
            return;
        }
        if(info=="")
        {
            alert("Fill the info correctly");
            return;
        }
        var ele=img.replace('h\\','#')
        var check = ele.split("#");

        Axios.post('http://localhost:5000/home/ourStorie/post',
        {
            title:title,
            img:check[1],
            time:time,
            date:date,
            info:info,
            link:link,
            checkVal:'recommended',
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
        Axios.get('http://localhost:5000/home/ourStorie/get',
        {
            params:{
                checkVal:'recommended'
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





    


  return (
    <>
    <p id="home_recommended"></p>
    <div className="page__each__outer">
        <div className="page__each__heading">
            Home OurStories Recommended
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
            <div className="name-outer">
                <div className="name-label">
                    Title{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                </div>
                <input onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder={"Title"} className="name-field"  required='required'/>
            </div>
            <div className='name-outer'>
                <div className="name-label">
                    Link{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                </div>
                <input  onChange={(e)=>{setLink(e.target.value)}}  type="text" placeholder={"Link"} className="name-field"  required='required'/>
            </div>
            <div className='name-outer'>
                <div className="name-label">
                    Date{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                </div>
                <input onChange={(e)=>{setDate(e.target.value)}} type="date" placeholder={"Date"} className="name-field"  required='required'/>
            </div>
            <div className='name-outer'>
                <div className="name-label">
                    Time{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                </div>
                <input onChange={(e)=>{setTime(e.target.value)}} type="text" placeholder={"Time like - 11:12:21"} className="name-field"  required='required'/>
            </div>
            <div className='name-outer'>
                <div className="name-label">
                    Image{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                </div>
                <input onChange={(e)=>{setImg(e.target.value)}} type="file" id="img" name="img"accept="image/*"></input>
            </div>
            <div className='name-outer'>
                <div className="name-label">
                    Info{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                </div>
                <textarea  onChange={(e)=>{setInfo(e.target.value)}} style={{height:"8rem"}}type="text" placeholder={"Info"} className="name-field"  required='required'/>
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
                    <>
                    hello
                    </>
                ):(
                    <div style={{width:"100%",height:"100%"}} id="check-get">
                        {getRes.map((ele)=>{
                            return(
                                <p>
                                    {ele}
                                </p>
                            )
                        })}
                        {/* {getRes} */}
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
        {/* <div className='page__each__content' style={{display:display.del}}>
            <div className="name-outer">
                <div className="name-label">
                    Id{'\u00A0'}<i style={{color:"#EF4B4D",width:"10px",height:"10px"}} class="far fa-address-book"></i>
                </div>
                <input onChange={(e)=>{setId(e.target.value)}} type="number" placeholder={"Id to delete"} className="name-field"  required='required'/>
            </div>
            <div className='submit'>
                <div className='submit__button' onClick={()=>{delData()}}>
                    Delete Data
                </div>
            </div>
        </div> */}
    </div>
    </>
  );
}

export default OurStories_Recommended;
