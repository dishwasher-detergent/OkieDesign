import DocsLayout from '../../components/Layout/Documentation'
import ComponentDisplay from "../../components/Layout/Display/Components"
import GettingStarted from "../../components/GettingStarted"
import Customization from "../../components/Customization"

export default function Home() {
    return (
        <DocsLayout>
            <GettingStarted />
            <Customization />
            <ComponentDisplay more={false}/>
        </DocsLayout>
    )
  }