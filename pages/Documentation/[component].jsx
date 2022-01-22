import DocsLayout from "../../components/Layout/Documentation"
import Alert from "../../components/Alert"
import Breadcrumbs from "../../components/Breadcrumbs"
import Badge from "../../components/Badge"
import Buttons from "../../components/Button"
import ButtonGroups from "../../components/ButtonGroup"
import Collapse from "../../components/Collapse"
import { useRouter } from "next/router"
import Tooltips from "../../components/Tooltips"

export default function Documentation() {
  const router = useRouter()
  const { component } = router.query;
  
  const getDocument = () => {
    switch(component.toLowerCase()){
      case 'alerts': return <Alert />;
      case 'badges': return <Badge />;
      case 'breadcrumbs': return <Breadcrumbs />;
      case 'buttons': return <Buttons />;
      case 'buttongroups': return <ButtonGroups />;
      case 'collapse': return <Collapse />;
      case 'tooltips': return <Tooltips />;
      default: router.push('/Documentation');
    }
  }

  return (
    <DocsLayout>
      {component ? getDocument() : null}
    </DocsLayout>
  )
}
