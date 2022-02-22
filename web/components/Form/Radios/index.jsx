import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Radios = () => {
    return (
      <ComponentLayout title="Radios">
        <ComponentDocs classes="list" title="Sizes">
            <input type="radio" className='radio xs' />
            <input type="radio" className='radio sm' />
            <input type="radio" className='radio' />
            <input type="radio" className='radio lg' />
            <input type="radio" className='radio xl' />
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
            <input type="radio" className='radio' />
            <input type="radio" className='radio success' />
            <input type="radio" className='radio warning' />
            <input type="radio" className='radio emergency' />
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
            <input type="radio" disabled className='radio' />
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Radios

export const RadioSample = () => {
  return (
    <div className="flex gap-1">
      <input type="radio" className='radio' />
      <input type="radio" className='radio success' />
      <input type="radio" className='radio warning' />
      <input type="radio" className='radio emergency' />
    </div>
  )
}