import Code from '../../../../Code';

const ComponentDocs = ({ title, classes, children}) => {
    return (
        // <div className="card fit">
        //     <figure className="p-2">
        //         <h3 className="font-semibold text-sm mb-2">{title}</h3>
        //         <div className={classes}>
        //           {children}
        //         </div>
        //     </figure>
        //     <figcaption>
        //       <div className="overflow-auto max-h-40">
        //         <Code>
        //           {children}
        //         </Code>
        //       </div>
        //     </figcaption>
        // </div>
      <article className="card fit">
        <h3 className="p-2 font-semibold text-sm border-b border-slate-300">{title}</h3>
        <div className="w-full p-2 py-4 flex flex-row flex-wrap gap-2 items-center justify-center">{children}</div>
        <div className="overflow-auto max-h-40">
          <Code>
            {children}
          </Code>
        </div>
    </article>
    )
}

export default ComponentDocs