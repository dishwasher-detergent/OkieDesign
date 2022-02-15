import DocsLayout from "../../components/Layout/Documentation"
import Notifications from "../../components/Notifications"
import Breadcrumbs from "../../components/Breadcrumbs"
import Badge from "../../components/Badge"
import Buttons from "../../components/Button"
import ButtonGroups from "../../components/ButtonGroup"
import Collapse from "../../components/Collapse"
import { useRouter } from "next/router"
import Tooltips from "../../components/Tooltips"
import Samples from "../../components/Layout/Documentation/Samples"
import Checkboxes from "../../components/Form/Checkboxes"
import Radios from "../../components/Form/Radios"
import Toggles from "../../components/Form/Toggles"
import Inputs from "../../components/Form/Inputs"
import Selects from "../../components/Form/Selects"
import Textareas from "../../components/Form/Textareas"
import Ranges from "../../components/Form/Ranges"
import Dropdown from "../../components/Dropdown"

export default function Documentation() {
  const router = useRouter()
  const { component } = router.query;
  
  const getDocument = () => {
    switch(component.toLowerCase()){
      case 'samples': return <Samples />;
      case 'notifications': return <Notifications />;
      case 'badges': return <Badge />;
      case 'breadcrumbs': return <Breadcrumbs />;
      case 'buttons': return <Buttons />;
      case 'buttongroups': return <ButtonGroups />;
      case 'collapse': return <Collapse />;
      case 'tooltips': return <Tooltips />;
      case 'checkboxes': return <Checkboxes />;
      case 'radios': return <Radios />;
      case 'toggles': return <Toggles />;
      case 'inputs': return <Inputs />;
      case 'selects': return <Selects />;
      case 'textareas': return <Textareas />;
      case 'ranges': return <Ranges />;
      case 'menu': return <Dropdown />;
      default: router.push('/Documentation');
    }
  }

  return (
    <DocsLayout>
      {component ? getDocument() : null}
    </DocsLayout>
  )
}
