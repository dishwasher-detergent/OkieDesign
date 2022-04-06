import ComponentLayout from '../Layout/Documentation/Component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Customization = () => {
    return (
      <ComponentLayout title="Customization">
          <div className="mb-12">
            <h3 className="pl-2 font-semibold text-lg mb-2">As easy as setting the custom color names to your preferred colors.</h3>
            <div className="overflow-hidden rounded-md mb-12">
                <SyntaxHighlighter
                    language="javascript"
                    style={materialOceanic}
                    showLineNumbers={true}
                    customStyle={{ 'margin': '0' }}
                >
{`module.exports = {
    theme: {
        colors: {
            primary: colors.purple,
            success: colors.emerald,
            warning: colors.amber,
            emergency: colors.red,
        },
    },
}`}
                </SyntaxHighlighter>
            </div>
          </div>
      </ComponentLayout>
    )
}

export default Customization