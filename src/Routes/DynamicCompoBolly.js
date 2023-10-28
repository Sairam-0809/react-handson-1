import React, { useContext, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { bucket } from '../Store/CreateStore';
import "./DynamicCompo.css"
import manImage from '../Images/Man1.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ShareIcon from '@mui/icons-material/Share';
import Footer from './Footer';


function DynamicCompoBolly() {
    const [count, setCount] = useState(898)
    const id = useParams().id;
    const [contextData] =  useContext(bucket);
    const Navi = useNavigate();
    console.log(id);
    const handleIconClick = () => {
        setCount(count + 1);
    };    
    return (
        <>        
            <div className='icons-parent'>
                <div className='icons'>
                    <div>
                        <VolunteerActivismIcon className='icons-heart' onClick={handleIconClick} /><span style={{marginLeft:"50px"}}>{count}</span>
                    </div>
                    <div>
                        <ShareIcon/><span style={{marginLeft:"10px"}}>Share this article</span></div>    
                    </div>
                </div>
            <div className='dynamic-parent'>
                {contextData.filter((data)=> data.id === parseInt(id)) // originally id is string so use parseInt
                .map((item, index)=>{
                    return(
                        <>    
                            <h2 className='heading'>{item.heading}</h2>
                            <div className='profile-parent'>
                                <div className='profile'>
                                    <img src={manImage} alt='img'/>
                                    <h4>SaiRam<h6>Oct 10, 2023 · 10 min read</h6></h4>    
                                </div>
                                <div className="socialMedia">
                                    <a href="https://www.instagram.com/"style={{color:"crimson"}}><InstagramIcon/></a>
                                    <a href="https://twitter.com/" style={{color:"lightblue"}}><TwitterIcon/></a>
                                    <a href="https://wa.me/" style={{color:"green"}}><WhatsAppIcon/></a>
                                    <a href="https://youtube.com/" style={{color:"red"}}><YouTubeIcon/></a>
                                </div>
                            </div>   
                            <div className='article-image'>
                                <img className='image'  src={item.image} alt="not found"/> 
                            </div>                    
                            <p className='description'>{item.description}</p>
                            <div className='counting' style={{marginBottom:"50px"}}>
                                <VolunteerActivismIcon className='icons-heart' onClick={handleIconClick} /><span style={{marginLeft:"20px"}}>{count}</span>
                            </div>
                            <div className='profile'>
                                <img src={manImage} alt='img'/>
                                <h4><p style={{margin:"10px 10px"}}>Written By</p>
                                    SaiRam<h6 style={{marginTop:"10px"}}>Oct 10, 2023 · 10 min read</h6></h4>    
                            </div>
                        </>
                    )
                })}    
            </div>
            <div className='back-button'>
                <button className='back' onClick={()=>Navi('/bollywood')}>BACK</button>
                <button className='back-home' onClick={()=>Navi("/")}>BACK HOME</button>
            </div>
                <h2>Bollywood Top</h2>
            <div className='top-parent'>
                {contextData.filter((contextData)=> contextData.footer === "Bollywood Top").map((item ,index)=>{
                    // console.log(item);
                    console.log(item.id)
                    return (
                    <div className='bolly-top' key={index}>
                        <Link className='child' to={`/detailsbollywood/${item.id}`}>                     
                            <img src={item.image} alt="not found" className='blog-image'/> 
                            <h2>{item.heading.slice(0, 30)}...</h2>
                        </Link>
                    </div>
                    )
                })}
            </div>
            <Footer/>   
        </>
  )
}

export default DynamicCompoBolly;