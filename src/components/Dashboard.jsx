import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../url';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate=useNavigate();

  const [visibility,setVisibility]=useState(false);
  const [timer,setTimer]=useState(0);
  const [content,setContent]=useState('');
  const [link,setLink]=useState('');
  const [id,setId]=useState('');

  useEffect(()=>{
    try{
      async function fetch() {
        const data=(await axios.get(url)).data;
        setId(data._id);
        setVisibility(data.visibility);
        setContent(data.content);
        setTimer(data.timer);
        setLink(data.link);

        console.log(data);
      }
      fetch();
    }
    catch(e){
      console.log(e);
    }
  },[]);

  async function submit(e){
    e.preventDefault();
    const obj={id,visibility,content,timer,link};
    console.log(obj);
    const res=await axios.put(url,obj);
    console.log(res);
    console.log("updated successfully");
    navigate("/");
  }


  return (
    <div>
      <h1>Dashboard</h1>

      <div className="container">
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Banner Content</label>
            <input type="text" className="form-control" value={content} onChange={(e)=>setContent(e.target.value)} id="content" required="required" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="link"  className="form-label">Link</label>
            <input type="text" required="required" className="form-control" value={link} onChange={(e)=>setLink(e.target.value)}  id="link" />
          </div>
          <div className="mb-3">
            <label htmlFor="timer" className="form-label">Timer</label>
            <input type="number"  required="required" className="form-control" value={timer} onChange={(e)=>setTimer(e.target.value)} id="timer" />
          </div>
          
          <div className="mb-3 form-check">
            <input type="checkbox" checked={visibility} onChange={(e)=>setVisibility(e.target.checked)} className="form-check-input" id="visibility" />
              <label className="form-check-label" htmlFor="visibility">Banner Visible</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>


    </div>
  )
}

export default Dashboard