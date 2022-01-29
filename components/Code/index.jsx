import SyntaxHighlighter from 'react-syntax-highlighter';
import { nnfxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import React, { createRef, useEffect, useState } from "react";
const code = ({children}) => {
    const html = createRef()
    const [getHTML, setHTML] = useState("")

    useEffect(() => {
        if(html.current)
            setHTML(format(html.current.innerHTML))
    },[])

    function format(html) {
        var tab = '   ';
        var result = '';
        var indent= '';
    
        html.split(/>\s*</).forEach(function(element) {
            if (element.match( /^\/\w/ )) {
                indent = indent.substring(tab.length);
            }
    
            result += indent + '<' + element + '>\n';
    
            if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) { 
                indent += tab;              
            }
        });
    
        return result.substring(1, result.length-2);
    }

    return (
        <>
            {getHTML ? <SyntaxHighlighter language="markdown" style={nnfxDark} showLineNumbers={true}>
                {getHTML}
            </SyntaxHighlighter>
            :
            <div ref={html} className='hidden'>
                {children}
            </div>}
        </>
  );
};

export default code