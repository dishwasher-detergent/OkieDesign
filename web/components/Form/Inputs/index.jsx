import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Inputs = ({title}) => {
    return (
      <ComponentLayout title={title} docNav={true}>
        <ComponentDocs classes="list" title="Sizes">
            <input type="text" className='input xs' placeHolder="Extra Small"/>
            <input type="text" className='input sm' placeHolder="Small"/>
            <input type="text" className='input' placeHolder="Standard"/>
            <input type="text" className='input lg' placeHolder="Large"/>
            <input type="text" className='input xl' placeHolder="Extra Large"/>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
            <input type="text" className='input' placeHolder="Standard"/>
            <input type="text" className='input success' placeHolder="Success"/>
            <input type="text" className='input warning' placeHolder="Warning"/>
            <input type="text" className='input emergency' placeHolder="Emergency"/>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
            <input type="text" disabled className='input' placeHolder="Disabled"/>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Inputs

export const InputSample = () => {
  return (
    <input type="text" className='input emergency' placeHolder="Required"/>
  )
}