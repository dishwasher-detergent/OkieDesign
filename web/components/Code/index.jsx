import ReactDOMServer from "react-dom/server";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import React from "react";
import pretty from "pretty";

const Code = ({ children }) => {
  console.log(ReactDOMServer.renderToStaticMarkup(children))
  return (
    <SyntaxHighlighter
      language="markdown"
      style={materialOceanic}
      showLineNumbers={true}
      customStyle={{'margin': '0'}}
    >
      {pretty(ReactDOMServer.renderToStaticMarkup(children),{inline : [""]})}
    </SyntaxHighlighter>
  );
};

export default Code;
