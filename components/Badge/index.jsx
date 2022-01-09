import SyntaxHighlighter from 'react-syntax-highlighter';
import ComponentLayout from '../Layout/Documentation/Component';

const Badge = () => {
    return (
      <ComponentLayout title="Badges">
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Sizes</h3>
                <div className="list horizontal mt-2">
                    <div className="badge small info">Small</div>
                    <div className="badge info">Standard</div>
                    <div className="badge large info">Large</div>
                    <div className="badge extra_large info">Extra Large</div>
                </div>
            </figure>
            <figcaption>
              <div className="rounded overflow-auto max-h-40">
                <SyntaxHighlighter language="html" showLineNumbers={true}>
{`<div className="badge small">Small</div>
<div className="badge">Standard</div>
<div className="badge large">Large</div>
<div className="badge extra_large">Extra Large</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Styles</h3>
                <div className="list horizontal mt-2">
                    <div className="badge">Standard</div>
                    <div className="badge info">Info</div>
                    <div className="badge success">Success</div>
                    <div className="badge warning">Warning</div>
                    <div className="badge emergency">Emergency</div>
                </div>
            </figure>
            <figcaption>
              <div className="rounded overflow-auto max-h-40">
                <SyntaxHighlighter language="html" showLineNumbers={true}>
{`<div className="badge">Standard</div>
<div className="badge info">Info</div>
<div className="badge success">Success</div>
<div className="badge warning">Warning</div>
<div className="badge emergency">Emergency</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
      </ComponentLayout>
    )
}

export default Badge