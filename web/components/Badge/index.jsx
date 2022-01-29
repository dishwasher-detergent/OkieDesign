import ComponentLayout from '../Layout/Documentation/Component';
import ComponentDocs from '../Layout/Display/Components/Component';

const Badge = () => {
    return (
      <ComponentLayout title="Badges">
        <ComponentDocs classes="list" title="Sizes">
          <div className="badge small info">Small</div>
          <div className="badge info">Standard</div>
          <div className="badge large info">Large</div>
          <div className="badge extra_large info">Extra Large</div>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
          <div className="badge">Standard</div>
          <div className="badge info">Info</div>
          <div className="badge success">Success</div>
          <div className="badge warning">Warning</div>
          <div className="badge emergency">Emergency</div>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Badge