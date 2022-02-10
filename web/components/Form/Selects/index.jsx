import ComponentLayout from '../../Layout/Documentation/Component';
import ComponentDocs from '../../Layout/Display/Components/Component';

const Selects = () => {
    return (
      <ComponentLayout title="Selects">
        <ComponentDocs classes="list" title="Sizes">
          <select class="select xs">
            <option>Extra Small</option>
          </select>
          <select class="select sm">
            <option>Small</option>
          </select>
          <select class="select">
            <option>Standard</option>
          </select>
          <select class="select lg">
            <option>Large</option>
          </select>
          <select class="select xl">
            <option>Extra Large</option>
          </select>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
          <select class="select">
            <option>Standard</option>
          </select>
          <select class="select success">
            <option>Success</option>
          </select>
          <select class="select warning">
            <option>Warning</option>
          </select>
          <select class="select emergency">
            <option>Emergency</option>
          </select>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Disabled">
          <select disabled class="select">
            <option>Disabled</option>
          </select>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Selects