import DefaultLayout from "../../components/Layout"
import Alert from "../../components/Alert"
import Badge from "../../components/Badge"
import Buttons from "../../components/Button"
import ButtonGroups from "../../components/ButtonGroup"
import Collapse from "../../components/Collapse"
import { useRouter } from "next/router"

export default function Documentation() {
  const router = useRouter()
  const { component } = router.query;
  
  const getDocument = () => {
    switch(component.toLowerCase()){
      case 'alert': return <Alert />;
      case 'badge': return <Badge />;
      case 'buttons': return <Buttons />;
      case 'buttongroups': return <ButtonGroups />;
      case 'collapse': return <Collapse />;
      default: router.push('/Documentation');
    }
  }

  return (
    <DefaultLayout>
      {component ? getDocument() : null}
    </DefaultLayout>
  )
}
