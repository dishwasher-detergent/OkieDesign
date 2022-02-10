import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Textareas = () => {
    return (
      <ComponentLayout title="Textareas">
        <ComponentDocs classes="list" title="Sizes">
          <textarea className='textarea xs' placeHolder="Extra Small"></textarea>
          <textarea className='textarea sm' placeHolder="Small"></textarea>
          <textarea className='textarea' placeHolder="Standard"></textarea>
          <textarea className='textarea lg' placeHolder="Large"></textarea>
          <textarea className='textarea xl'  placeHolder="Extra Large"></textarea>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
          <textarea className='textarea' placeHolder="Standard"></textarea>
          <textarea className='textarea success' placeHolder="Success"></textarea>
          <textarea className='textarea warning' placeHolder="Warning"></textarea>
          <textarea className='textarea emergency' placeHolder="Emergency"></textarea>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
          <textarea disabled className='textarea' placeHolder="Disabled"></textarea>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Textareas