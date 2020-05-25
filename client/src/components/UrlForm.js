import React,{useState} from "react";
import Form from './Form1'
import Post from '../actions/postURL'
import CopyUrl from './copyurl'
import config from '../config'
var pattern = /^((http|https|ftp):\/\/)/;



const UrlForm = () =>{
const [shorturl,setshorturl] = useState('');
const [message,setmessage] = useState('');

async function SubmitHandler(event) {

      event.preventDefault();
      var url = event.target.url.value;
    url =  url.toLowerCase();
      if(pattern.test(url)) {
        setmessage('');
    await Post(url,(err,code)=>{
      setshorturl('https://shorten-ly.herokuapp.com/'+code['shortCode']);
    })

  }else {
    setmessage('please enter website starting with http:// or https://');
  }
}




    return (
      <div>
    <Form onsubmit = {SubmitHandler}
></Form>
{message}
<CopyUrl url = {shorturl}></CopyUrl>
      </div>
    );
}

export default UrlForm;
