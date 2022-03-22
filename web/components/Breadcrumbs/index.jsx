import ComponentLayout from '../Layout/Documentation/Component';
import ComponentDocs from '../Layout/Display/Components/Component';

const Breadcrumbs = ({title}) => {
    return (
      <ComponentLayout title={title} docNav={true}>
        <ComponentDocs classes="list vertical" title="Sizes">
          <div className="breadcrumb extra_small">
            <p>Mensware</p>
            <p>Pants</p>
          </div>
          <div className="breadcrumb small">
            <p>Mensware</p>
            <p>Pants</p>
          </div>
          <div className="breadcrumb">
            <p>Mensware</p>
            <p>Pants</p>
          </div>
          <div className="breadcrumb large">
            <p>Mensware</p>
            <p>Pants</p>
          </div>
          <div className="breadcrumb extra_large">
            <p>Mensware</p>
            <p>Pants</p>
          </div>
        </ComponentDocs>
        <ComponentDocs classes="list vertical" title="Styles">
          <div className="breadcrumb">
            <p>Mensware</p>
            <p>Pants</p>
          </div>
          <div className="breadcrumb arrow">
            <p>Mensware</p>
            <p>Pants</p>
          </div>
        </ComponentDocs>
      </ComponentLayout>
    )
}

export default Breadcrumbs

export const BreadcrumbSample = () => {
  return (
    <>
      <div className="breadcrumb lg">
        <p>Mensware</p>
        <p>Pants</p>
      </div>
    </>
  )
}