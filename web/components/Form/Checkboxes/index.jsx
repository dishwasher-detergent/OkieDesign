import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Checkboxes = ({title}) => {
    return (
      <ComponentLayout title={title}>
        <ComponentDocs classes="list" title="Sizes">
            <input type="checkbox" className='checkbox xs' />
            <input type="checkbox" className='checkbox sm' />
            <input type="checkbox" className='checkbox' />
            <input type="checkbox" className='checkbox lg' />
            <input type="checkbox" className='checkbox xl' />
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
            <input type="checkbox" className='checkbox' />
            <input type="checkbox" className='checkbox success' />
            <input type="checkbox" className='checkbox warning' />
            <input type="checkbox" className='checkbox emergency' />
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
            <input type="checkbox" disabled className='checkbox' />
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Checkboxes

export const CheckboxSample = () => {
  return (
    <div className="flex gap-1">
      <input type="checkbox" className='checkbox' />
      <input type="checkbox" className='checkbox success' />
      <input type="checkbox" className='checkbox warning' />
      <input type="checkbox" className='checkbox emergency' />
    </div>
  )
}