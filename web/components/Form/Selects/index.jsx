import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Selects = () => {
    return (
      <ComponentLayout title="Selects">
        <ComponentDocs classes="list" title="Sizes">
          <select ClassName="select xs">
            <option>Extra Small</option>
          </select>
          <select ClassName="select sm">
            <option>Small</option>
          </select>
          <select ClassName="select">
            <option>Standard</option>
          </select>
          <select ClassName="select lg">
            <option>Large</option>
          </select>
          <select ClassName="select xl">
            <option>Extra Large</option>
          </select>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
          <select ClassName="select">
            <option>Standard</option>
          </select>
          <select ClassName="select success">
            <option>Success</option>
          </select>
          <select ClassName="select warning">
            <option>Warning</option>
          </select>
          <select ClassName="select emergency">
            <option>Emergency</option>
          </select>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
          <select disabled ClassName="select">
            <option>Disabled</option>
          </select>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Selects