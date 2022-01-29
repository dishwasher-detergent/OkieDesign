import Code from '../../../../Code';

const ComponentDocs = ({ title, classes, children}) => {
    return (
        <div className="card fit">
            <figure className="p-2">
                <h3 className="font-semibold text-sm mb-2">{title}</h3>
                <div className={classes}>
                  {children}
                </div>
            </figure>
            <figcaption>
              <div className="overflow-auto max-h-40">
                <Code>
                  {children}
                </Code>
              </div>
            </figcaption>
        </div>
    )
}

export default ComponentDocs