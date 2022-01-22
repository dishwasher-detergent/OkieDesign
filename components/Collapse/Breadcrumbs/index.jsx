import SyntaxHighlighter from 'react-syntax-highlighter';
import ComponentLayout from '../Layout/Documentation/Component';

const Collapse = () => {
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
{`<div className='collapse extra_small w-48' tabIndex={0}>
  <p className="title">Extra Small</p>
  <div className="content">
    Extra Small Content
  </div>
</div>
<div className='collapse small w-48' tabIndex={0}>
  <p className="title">Small</p>
  <div className="content">
    Small Content
  </div>
</div>
<div className='collapse w-48' tabIndex={0}>
  <p className="title">Standard</p>
  <div className="content">
    Standard Content
  </div>
</div>
<div className='collapse large w-48' tabIndex={0}>
  <p className="title">Large</p>
  <div className="content">
    Large Content
  </div>
</div>
<div className='collapse extra_large w-48' tabIndex={0}>
  <p className="title">Extra Large</p>
  <div className="content">
    Extra Large Content
  </div>
</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Sizes</h3>
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
{`<div className='collapse extra_small w-48' tabIndex={0}>
  <p className="title">Extra Small</p>
  <div className="content">
    Extra Small Content
  </div>
</div>
<div className='collapse small w-48' tabIndex={0}>
  <p className="title">Small</p>
  <div className="content">
    Small Content
  </div>
</div>
<div className='collapse w-48' tabIndex={0}>
  <p className="title">Standard</p>
  <div className="content">
    Standard Content
  </div>
</div>
<div className='collapse large w-48' tabIndex={0}>
  <p className="title">Large</p>
  <div className="content">
    Large Content
  </div>
</div>
<div className='collapse extra_large w-48' tabIndex={0}>
  <p className="title">Extra Large</p>
  <div className="content">
    Extra Large Content
  </div>
</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
      </ComponentLayout>
    )
}

export default Collapse