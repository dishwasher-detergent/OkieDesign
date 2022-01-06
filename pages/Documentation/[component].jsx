import DefaultLayout from "../../components/Layout"
import Buttons from "../../components/Button"
import ButtonGroups from "../../components/ButtonGroup"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Documentation() {
  const router = useRouter()
  const { component } = router.query;
  
  const getDocument = () => {
    switch(component.toLowerCase()){
      case 'buttons': return <Buttons />;
      case 'buttongroups': return <ButtonGroups />;
      default: return (
      <div className="list">
        <Link href='Documentation/Buttons'><a className="button">Buttons</a></Link>
        <Link href='Documentation/ButtonGroups'><a className="button">Button Groups</a></Link>
      </div>
      ); 
    }
  }

  return (
    <DefaultLayout>
    <div className="alert"><p>Classes in <span className="badge emergency">red</span> are required and give the regular options, classes in blue <span className="badge info">modify</span> the default styling.</p></div>
    {component ? getDocument() : null}
    </DefaultLayout>
  )
}
