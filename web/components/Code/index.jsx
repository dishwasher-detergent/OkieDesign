import ReactDOMServer from "react-dom/server";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nnfxDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import React from "react";
import pretty from "pretty";

const Code = ({ children }) => {
  return (
    <SyntaxHighlighter
      language="markdown"
      style={nnfxDark}
      showLineNumbers={true}
    >
      {pretty(ReactDOMServer.renderToStaticMarkup(children))}
    </SyntaxHighlighter>
  );
};

export default Code;
