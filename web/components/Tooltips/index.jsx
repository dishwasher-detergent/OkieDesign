import ComponentLayout from '../Layout/Documentation/Component';
import ComponentDocs from '../Layout/Display/Components/Component';

const Tooltips = () => {
    return (
      <ComponentLayout title="Collapse">
        <ComponentDocs classes="list" title="Locations">
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
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
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
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Tooltips

export const TooltipSample = () => {
  return (
    <div data-content="Success" className="tooltip top success open">
      <button className="button">Save</button>
    </div>
  )
}