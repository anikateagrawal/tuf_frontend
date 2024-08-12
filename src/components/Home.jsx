import React, { useEffect, useState } from 'react'
import axios from "axios";
import {url} from "../url";

const Home = () => {

  const [visibility,setVisibility]=useState(false);
  const [timer,setTimer]=useState(0);
  const [content,setContent]=useState('');
  const [link,setLink]=useState('');
  const [loading,setLoading]=useState("Loading...");

  
  useEffect(()=>{
    let intervalid=null;
    if(timer>0){
      intervalid=setInterval(()=>{
        setTimer((t)=>t-1);
      },1000)
    }
    else{
      setVisibility(false);
    }
    return ()=>clearInterval(intervalid);
  },[timer]);
  


  useEffect(()=>{
    try{
      async function fetch() {
        const data=(await axios.get(url)).data;

        setVisibility(data.visibility);
        setContent(data.content);
        setTimer(data.timer);
        setLink(data.link);
        setLoading("WOOSH... ! Banner Gone !! Timer is up Or Visibility is OFF!!!");
        console.log(data);
      }
      fetch();
    }
    catch(e){
      console.log(e);
    }
  },[]);



  return (
    <div>
      {visibility?
      <div className="row" style={{height:"700px",backgroundColor:"black",color:"white",fontSize:"72px"}}>
          <div className="col d-flex flex-column align-items-center justify-content-center" >
            <div>{content}</div>
            <a href={link} target='_blank' className="btn btn-primary">Explore More</a>
          </div>
          <div className="col d-flex align-items-center justify-content-center m-5" style={{border:"20px solid white",borderRadius:"50%"}}>{timer}</div>
      </div>: <div className='d-flex align-items-center justify-content-center' style={{height:"700px",backgroundColor:"Blue",color:"white",fontSize:"72px"}}>{loading}</div>
}
    </div>
  )
}

export default Home