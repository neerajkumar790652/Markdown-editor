import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Screen = () => {
    const [input,setInput] = useState('');
    const output=(e)=>{
        setInput(e.target.value)
    }
  return (
    <div className='main'>
      <div>
        <textarea cols={57} rows={30} onChange={output} value={input}></textarea>
      </div>
  
        <div><ReactMarkdown>{input}</ReactMarkdown></div>
     
    </div>
  )
}

export default Screen;
