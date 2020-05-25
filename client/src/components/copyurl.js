import React, { useRef, useState } from 'react';



export default function CopyUrl(props) {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied to your clipboard !');
  };

  return (
    <div >

    <form>
      <textarea className="field"
        ref={textAreaRef}
        value={props.url}
      />
    </form>

      {
       document.queryCommandSupported('copy') &&
        <div >
          <button className = "button" onClick={copyToClipboard}>Copy</button>
          {copySuccess}
        </div>
      }

    </div>
  );
}
