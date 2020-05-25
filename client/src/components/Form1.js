import React from 'react'


const Form1 = ({onsubmit}) =>{
  return (
    <div className="Input_wrapper">
    <form onSubmit = {onsubmit}>
    <input id="url" className="field" placeholder="Website URL" />
    <input type = "submit" id = "get" className = "button" />
    <input type="reset" className = "button" defaultValue="Reset" />
    </form>
      </div>
  );
}


export default Form1;
