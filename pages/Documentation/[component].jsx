import DefaultLayout from "../../components/Layout"
import Alert from "../../components/Alert"
import Buttons from "../../components/Button"
import ButtonGroups from "../../components/ButtonGroup"
import { useRouter } from "next/router"

export default function Documentation() {
  const router = useRouter()
  const { component } = router.query;
  
  const getDocument = () => {
    switch(component.toLowerCase()){
      case 'alert': return <Alert />;
      case 'buttons': return <Buttons />;
      case 'buttongroups': return <ButtonGroups />;
      default: router.push('/Documentation');
    }
  }

  return (
    <DefaultLayout>
      {component ? getDocument() : null}
    </DefaultLayout>
  )
}
