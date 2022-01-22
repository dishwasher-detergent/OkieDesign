import SyntaxHighlighter from 'react-syntax-highlighter';
import ComponentLayout from '../Layout/Documentation/Component';

const Breadcrumps = () => {
    return (
      <ComponentLayout title="Collapse">
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Sizes</h3>
                <div className="mt-2 flex flex-col">
                  <div className="breadcrumb extra_small">
                    <p>Mensware</p>
                    <p>Pants</p>
                  </div>
                  <div className="breadcrumb small">
                    <p>Mensware</p>
                    <p>Pants</p>
                  </div>
                  <div className="breadcrumb">
                    <p>Mensware</p>
                    <p>Pants</p>
                  </div>
                  <div className="breadcrumb large">
                    <p>Mensware</p>
                    <p>Pants</p>
                  </div>
                  <div className="breadcrumb extra_large">
                    <p>Mensware</p>
                    <p>Pants</p>
                  </div>
                </div>
            </figure>
            <figcaption>
              <div className="rounded overflow-auto max-h-40">
                <SyntaxHighlighter language="html" showLineNumbers={true}>
{`<div className="breadcrumb extra_small">
  <p>Mensware</p>
  <p>Pants</p>
</div>
<div className="breadcrumb small">
  <p>Mensware</p>
  <p>Pants</p>
</div>
<div className="breadcrumb">
  <p>Mensware</p>
  <p>Pants</p>
</div>
<div className="breadcrumb large">
  <p>Mensware</p>
  <p>Pants</p>
</div>
<div className="breadcrumb extra_large">
  <p>Mensware</p>
  <p>Pants</p>
</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Styles</h3>
                <div className="mt-2 flex flex-col">
                  <div className="breadcrumb">
                    <p>Mensware</p>
                    <p>Pants</p>
                  </div>
                  <div className="breadcrumb slash">
                    <p>Mensware</p>
                    <p>Pants</p>
                  </div>
                </div>
            </figure>
            <figcaption>
              <div className="rounded overflow-auto max-h-40">
                <SyntaxHighlighter language="html" showLineNumbers={true}>
{`<div className="mt-2 flex flex-col">
  <div className="breadcrumb">
    <p>Mensware</p>
    <p>Pants</p>
  </div>
  <div className="breadcrumb slash">
    <p>Mensware</p>
    <p>Pants</p>
  </div>
</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
      </ComponentLayout>
    )
}

export default Breadcrumps