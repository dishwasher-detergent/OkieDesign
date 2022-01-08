import SyntaxHighlighter from 'react-syntax-highlighter';

const Collapse = () => {
    return (
      <div className="w-full h-full grid grid-cols-1 gap-2">
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">Sizes</h3>
                <div className="list horizontal mt-2 items-start">
                  <div className='collapse extra_small w-48' tabIndex={0}>
                    <h2>
                      Extra Small
                    </h2>
                    <div className="content">
                      Extra Small Content
                    </div>
                  </div>
                  <div className='collapse small w-48' tabIndex={0}>
                    <h2>Small</h2>
                    <div className="content">
                      Small Content
                    </div>
                  </div>
                  <div className='collapse w-48' tabIndex={0}>
                    <h2>
                      Standard 
                    </h2>
                    <div className="content">
                      Standard Content
                    </div>
                  </div>
                  <div className='collapse large w-48' tabIndex={0}>
                    <h2>Large</h2>
                    <div className="content">
                      Large Content
                    </div>
                  </div>
                  <div className='collapse extra_large w-48' tabIndex={0}>
                    <h2>Extra Large</h2>
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
  <h2>Extra Small</h2>
  <div className="content">
    Extra Small Content
  </div>
</div>
<div className='collapse small w-48' tabIndex={0}>
  <h2>Small</h2>
  <div className="content">
    Small Content
  </div>
</div>
<div className='collapse w-48' tabIndex={0}>
  <h2>Standard</h2>
  <div className="content">
    Standard Content
  </div>
</div>
<div className='collapse large w-48' tabIndex={0}>
  <h2>Large</h2>
  <div className="content">
    Large Content
  </div>
</div>
<div className='collapse extra_large w-48' tabIndex={0}>
  <h2>Extra Large</h2>
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
                    <h2>
                      Outlined
                    </h2>
                    <div className="content">
                      Content
                    </div>
                  </div>
                  <div className='collapse w-48 plus' tabIndex={0}>
                    <h2>
                      Plus
                    </h2>
                    <div className="content">
                      Content
                    </div>
                  </div>
                  <div className='collapse w-48 arrow' tabIndex={0}>
                    <h2>Arrow</h2>
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
  <h2>
    Outlined
  </h2>
  <div className="content">
    Content
  </div>
</div>
<div className='collapse w-48 plus' tabIndex={0}>
  <h2>
    Plus
  </h2>
  <div className="content">
    Content
  </div>
</div>
<div className='collapse w-48 arrow' tabIndex={0}>
  <h2>Arrow</h2>
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
                    <h2>
                      Forced Open
                    </h2>
                    <div className="content">
                      Content
                    </div>
                  </div>
                  <div className='collapse w-48 close outline' tabIndex={0}>
                    <h2>
                      Forced Close
                    </h2>
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
  <h2>
    Forced Open
  </h2>
  <div className="content">
    Content
  </div>
</div>
<div className='collapse w-48 close outline' tabIndex={0}>
  <h2>
    Forced Close
  </h2>
  <div className="content">
    Content
  </div>
</div>`}
                </SyntaxHighlighter>
              </div>
            </figcaption>
        </div>
      </div>
    )
}

export default Collapse