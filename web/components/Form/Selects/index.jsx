import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Selects = ({title}) => {
    return (
      <ComponentLayout title={title} docNav={true}>
        <ComponentDocs classes="list" title="Sizes">
          <select className="select xs">
            <option>Extra Small</option>
          </select>
          <select className="select sm">
            <option>Small</option>
          </select>
          <select className="select">
            <option>Standard</option>
          </select>
          <select className="select lg">
            <option>Large</option>
          </select>
          <select className="select xl">
            <option>Extra Large</option>
          </select>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
          <select className="select">
            <option>Standard</option>
          </select>
          <select className="select success">
            <option>Success</option>
          </select>
          <select className="select warning">
            <option>Warning</option>
          </select>
          <select className="select emergency">
            <option>Emergency</option>
          </select>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
          <select disabled className="select">
            <option>Disabled</option>
          </select>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Selects

export const SelectSample = () => {
  return (
    <select className="select">
      <option>Alfred</option>
      <option>Bruce</option>
      <option>Dick</option>
    </select>
  )
}