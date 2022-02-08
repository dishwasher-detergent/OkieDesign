import ComponentLayout from '../Layout/Documentation/Component';
import ComponentDocs from '../Layout/Display/Components/Component';

const Badge = () => {
    return (
      <ComponentLayout title="Badges">
        <ComponentDocs classes="list" title="Sizes">
          <div className="badge xs">Extra Small</div>
          <div className="badge sm">Small</div>
          <div className="badge">Standard</div>
          <div className="badge lg">Large</div>
          <div className="badge xl">Extra Large</div>
          <div className="badge xxl">2x Large</div>
        </ComponentDocs>
        <ComponentDocs classes="list" title="Styles">
          <div className="badge">Standard</div>
          <div className="badge success">Success</div>
          <div className="badge warning">Warning</div>
          <div className="badge emergency">Emergency</div>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Badge