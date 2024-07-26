import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function CodeHighlighter({codeString,pro_language}:{codeString:string,pro_language:string})  {
  return (
    <SyntaxHighlighter language={pro_language} style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};