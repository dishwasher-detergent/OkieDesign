import ComponentLayout from '../Layout/Documentation/Component';
import ComponentDocs from '../Layout/Display/Components/Component';

const Buttons = () => {
    return (
      <ComponentLayout title="Notifications">
        <ComponentDocs classes="list vertical" title="Sizes">
          <div className="notification">Standard notification</div>
          <div className="notification toast">Toast notification</div>
        </ComponentDocs>
        <ComponentDocs classes="list vertical" title="Styles">
          <div className="notification">Standard</div>
          <div className="notification success">Success</div>
          <div className="notification warning">Warning</div>
          <div className="notification emergency">Emergency</div>
        </ComponentDocs>
        <ComponentDocs classes="list vertical" title="With Icons">
          <div className="notification warning">
            <p>Icon After</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>                    
          </div>
          <div className="notification emergency">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg> 
            <p>Icon Before</p>
          </div>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Buttons