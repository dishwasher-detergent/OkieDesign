import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Ranges = () => {
    return (
      <ComponentLayout title="Ranges">
        <ComponentDocs classes="list" title="Sizes">
            <input type="range" className='range sm' placeHolder="Small"/>
            <input type="range" className='range' placeHolder="Standard"/>
            <input type="range" className='range lg' placeHolder="Large"/>
            <input type="range" className='range xl' placeHolder="Extra Large"/>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
            <input type="range" className='range' placeHolder="Standard"/>
            <input type="range" className='range success' placeHolder="Success"/>
            <input type="range" className='range warning' placeHolder="Warning"/>
            <input type="range" className='range emergency' placeHolder="Emergency"/>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
            <input type="range" disabled className='range' placeHolder="Disabled"/>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Ranges