import ComponentLayout from '../Layout/Documentation/Component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const Installation = () => {
    return (
      <ComponentLayout title="Installation">
          <div className="mb-12">
            <h3 className="pl-2 font-semibold text-lg mb-2">Install Okie Design</h3>
            <div className="overflow-hidden rounded-md mb-12">
                <SyntaxHighlighter
                    language="javascript"
                    style={materialOceanic}
                    showLineNumbers={true}
                    customStyle={{ 'margin': '0' }}
                >                    
                    npm i okiedesign
                </SyntaxHighlighter>
            </div>
            <h3 className="pl-2 font-semibold text-lg mb-2">Add <span className="badge info large">okiedesign</span> to the tailwind.config.js file.</h3>
            <div className="overflow-hidden rounded-md">
                <SyntaxHighlighter
                    language="javascript"
                    style={materialOceanic}
                    showLineNumbers={true}
                    customStyle={{ 'margin': '0' }}
                >
{`module.exports = {
    plugins: [
        require('okiedesign'),
    ],
}`}
                </SyntaxHighlighter>
            </div>
          </div>
      </ComponentLayout>
    )
}

export default Installation