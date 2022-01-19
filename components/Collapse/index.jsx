import SyntaxHighlighter from 'react-syntax-highlighter';
import ComponentLayout from '../Layout/Documentation/Component';

const Collapse = () => {
    return (
      <ComponentLayout title="Collapse">
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Sizes</h3>
                <div className="list horizontal mt-2 items-start">
                  <div className='collapse extra_small w-48' tabIndex={0}>
                    <p className="title">
                      Extra Small
                    </p>
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
                    <p className="title">
                      Standard 
                    </p>
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
                <h3 className="font-semibold text-sm mb-2">Styles</h3>
                <div className="list horizontal mt-2 items-start">
                  <div className='collapse w-48 outline' tabIndex={0}>
                    <p className="title">
                      Outlined
                    </p>
                    <div className="content">
                      Content
                    </div>
                  </div>
                  <div className='collapse w-48 plus' tabIndex={0}>
                    <p className="title">
                      Plus
                    </p>
                    <div className="content">
                      Content
                    </div>
                  </div>
                  <div className='collapse w-48 arrow' tabIndex={0}>
                    <p className="title">Arrow</p>
                    <div className="content">
                      Content
                    </div>
                  </div>
                </div>
            </figure>
            <figcaption>
              <div className="rounded overflow-auto max-h-40">
                <SyntaxHighlighter language="html" showLineNumbers={true}>
{`<div className='collapse w-48 outline' tabIndex={0}>
  <p className="title">
    Outlined
  </p>
  <div className="content">
    Content
  </div>
</div>
<div className='collapse w-48 plus' tabIndex={0}>
  <p className="title">
    Plus
  </p>
  <div className="content">
    Content
  </div>
</div>
<div className='collapse w-48 arrow' tabIndex={0}>
  <p className="title">Arrow</p>
  <div className="content">
    Content
  </div>
</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Toggles</h3>
                <div className="list horizontal mt-2 items-start">
                  <div className='collapse w-48 open outline' tabIndex={0}>
                    <p className="title">
                      Forced Open
                    </p>
                    <div className="content">
                      Content
                    </div>
                  </div>
                  <div className='collapse w-48 close outline' tabIndex={0}>
                    <p className="title">
                      Forced Close
                    </p>
                    <div className="content">
                      Content
                    </div>
                  </div>
                </div>
            </figure>
            <figcaption>
              <div className="rounded overflow-auto max-h-40">
                <SyntaxHighlighter language="html" showLineNumbers={true}>
{`<div className='collapse w-48 open outline' tabIndex={0}>
  <p className="title">
    Forced Open
  </p>
  <div className="content">
    Content
  </div>
</div>
<div className='collapse w-48 close outline' tabIndex={0}>
  <p className="title">
    Forced Close
  </p>
  <div className="content">
    Content
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