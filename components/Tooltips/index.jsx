import SyntaxHighlighter from 'react-syntax-highlighter';
import ComponentLayout from '../Layout/Documentation/Component';

const Tooltips = () => {
    return (
      <ComponentLayout title="Collapse">
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Location</h3>
                <div className="list horizontal my-4 items-start">
                  <div data-content="I'm on the top!" className="tooltip top">
                    <button className="button">Top</button>
                  </div>
                  <div data-content="I'm on the bottom!" className="tooltip bottom">
                    <button className="button">Bottom</button>
                  </div>
                  <div data-content="I'm on the left!" className="tooltip left">
                    <button className="button">Left</button>
                  </div>
                  <div data-content="I'm on the right!" className="tooltip right">
                    <button className="button">Right</button>
                  </div>
                </div>
            </figure>
            <figcaption>
              <div className="rounded overflow-auto max-h-40">
                <SyntaxHighlighter language="html" showLineNumbers={true}>
{`<div data-content="I'm on the top!" className="tooltip top">
  <button className="button">Top</button>
</div>
<div data-content="I'm on the bottom!" className="tooltip bottom">
  <button className="button">Bottom</button>
</div>
<div data-content="I'm on the left!" className="tooltip left">
  <button className="button">Left</button>
</div>
<div data-content="I'm on the right!" className="tooltip right">
  <button className="button">Right</button>
</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Styles</h3>
                <div className="list horizontal my-4 items-start">
                  <div data-content="Regular" className="tooltip top">
                    <button className="button">Regular</button>
                  </div>
                  <div data-content="Dark" className="tooltip top dark">
                    <button className="button ghost">Dark</button>
                  </div>
                  <div data-content="Success" className="tooltip top success">
                    <button className="button success">Success</button>
                  </div>
                  <div data-content="Warning" className="tooltip top warning">
                    <button className="button warning">Warning</button>
                  </div>
                  <div data-content="Emergency" className="tooltip top emergency">
                    <button className="button emergency">Emergency</button>
                  </div>
                </div>
            </figure>
            <figcaption>
              <div className="rounded overflow-auto max-h-40">
                <SyntaxHighlighter language="html" showLineNumbers={true}>
{`<div data-content="Regular" className="tooltip top">
  <button className="button">Regular</button>
</div>
<div data-content="Dark" className="tooltip top dark">
  <button className="button ghost">Dark</button>
</div>
<div data-content="Success" className="tooltip top success">
  <button className="button success">Success</button>
</div>
<div data-content="Warning" className="tooltip top warning">
  <button className="button warning">Warning</button>
</div>
<div data-content="Emergency" className="tooltip top emergency">
  <button className="button emergency">Emergency</button>
</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
      </ComponentLayout>
    )
}

export default Tooltips