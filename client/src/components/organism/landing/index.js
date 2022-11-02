

import './index.css';
import logo from './../../images/logo.png';
import Sidepanel from './../../store/sidepanel'
import OurStories_Recommended from './../OurStories_Recommended';
import OurStories_Leadership from './../OurStories_Leadership';
import OurStories_Csr from './../OurStories_Csr';
import OurStories_Sustainability from './../OurStories_Sustainability';
import Home_LatestNews from './../Home_LatestNews';
import Innovation_Card from './../Innovation_Card';
import Innovation_Insight from './../Innovation_Insight';
import Leadership_Vanguard from './../Leadership_Vanguard';
import Leadership_Leader from './../Leadership_Leader';
import Leadership_Head from './../Leadership_Head';
import Leadership_Director from './../Leadership_Director';
import Women_Leadership_Better_Together from './../Women_Leadership_Better_Together';
import Women_Leadership_Redefining_Boundaries from './../Women_Leadership_Redefining_Boundaries';
import EventPage from './../event';
import Investor_Company from './../investor_Company';
import Investor_Update from './../Investor_Update';
import Mediarelease from './../Mediarelease';
import Pressreport from './../Pressreport';
import Stories from './../Stories';



import { useNavigate } from 'react-router-dom';

const Landing=(props)=> {


  const navigate = useNavigate();

  function checkNavigate()
  {
    if(props.login===true)
    {
      navigate('/delete');
    }
    else
    {
      navigate('/login');
    }
  }



  return (
    <>
    <div className="outer">
      <div className="inner">
        <div className="inner__left">
          <div className="inner__left__image">
            <img src={logo} style={{width:"100%",height:"100%"}}/>
          </div>
          <div className="inner__left__title">
            BackDev
          </div>
          <div className="inner__left__content">
            {Sidepanel.map((ele)=>{
              const{id,label,img,link}=ele;
              return(
                <>
                <a href={"#"+link} key={id} className="inner__left__content__each">
                  <img src={img} style={{width:"20px",height:"20px"}}/>{'\u00A0'}{'\u00A0'}{label}
                </a>
                </>
              )
            })}
          </div>
          <div className='inner__left__delete' onClick={()=>{checkNavigate()}}>
            Delete
          </div>
          <div className='inner__left__delete' style={{display:props.logoutDisplay}} onClick={()=>{alert("logged Out");props.changeLogin(false)}}>
            Logout
          </div>
        </div>
        <div className="inner__right">
          <div id="home" className='bet__line' style={{marginTop:"2rem"}}>
          </div>
          <div className='big__heading'>Home</div>
          <div className='bet__line'>
          </div>
          <OurStories_Recommended/>
          <div className='bet__line'>
          </div>
          <OurStories_Leadership/>
          <div className='bet__line'>
          </div>
          <OurStories_Csr/>
          <div className='bet__line'>
          </div>
          <OurStories_Sustainability/>
          <div className='bet__line'>
          </div>
          <Home_LatestNews/>
          <div id="innovation" className='bet__line'>
          </div>
          <div className='big__heading'>Innovation</div>
          <div className='bet__line'>
          </div>
          <Innovation_Card/>
          <div className='bet__line'>
          </div>
          <Innovation_Insight/>
          <div id="leadership" className='bet__line'>
          </div>
          <div className='big__heading'>Leadership</div>
          <div className='bet__line'>
          </div>
          <Leadership_Vanguard/>
          <div className='bet__line'>
          </div>
          <Leadership_Leader/>
          <div className='bet__line'>
          </div>
          <Leadership_Head/>
          <div className='bet__line'>
          </div>
          <Leadership_Director/>
          <div id="womenLead"className='bet__line'>
          </div>
          <div className='big__heading'>Women Leadership</div>
          <div className='bet__line'>
          </div>
          <Women_Leadership_Better_Together/>
          <div className='bet__line'>
          </div>
          <Women_Leadership_Redefining_Boundaries/>
          <div id="investor" className='bet__line'>
          </div>
          <div className='big__heading'>Investor</div>
          <div className='bet__line'>
          </div>
          <Investor_Company/>
          <div className='bet__line'>
          </div>
          <Investor_Update/>
          <div id="event"  className='bet__line'>
          </div>
          <div className='big__heading'>Event</div>
          <div className='bet__line'>
          </div>
          <EventPage/>
          <div  id="mediarelease"  className='bet__line'>
          </div>
          <div className='big__heading'>MediaRelease</div>
          <div className='bet__line'>
          </div>
          <Mediarelease/>
          <div  id="pressreport" className='bet__line'>
          </div>
          <div className='big__heading'>Pressreport</div>
          <div className='bet__line'>
          </div>
          <Pressreport/>
          <div  id="stories"  className='bet__line'>
          </div>
          <div className='big__heading'>Stories</div>
          <div className='bet__line'>
          </div>
          <Stories/>
        </div>  
      </div>
    </div>
    </>
  );
}

export default Landing;
