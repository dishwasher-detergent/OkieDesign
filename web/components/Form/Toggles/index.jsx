import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Toggles = () => {
    return (
      <ComponentLayout title="Toggles">
        <ComponentDocs classes="list" title="Sizes">
            <input type="checkbox" className='toggle xs' />
            <input type="checkbox" className='toggle sm' />
            <input type="checkbox" className='toggle' />
            <input type="checkbox" className='toggle lg' />
            <input type="checkbox" className='toggle xl' />
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
            <input type="checkbox" className='toggle' />
            <input type="checkbox" className='toggle success' />
            <input type="checkbox" className='toggle warning' />
            <input type="checkbox" className='toggle emergency' />
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
            <input type="checkbox" disabled className='toggle' />
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Toggles