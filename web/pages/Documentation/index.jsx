import DocsLayout from '../../components/Layout/Documentation'
import ComponentDisplay from "../../components/Layout/Display/Components"
import GettingStarted from "../../components/GettingStarted"

export default function Home() {
    return (
        <DocsLayout>
            <GettingStarted />
            <ComponentDisplay more={false}/>
        </DocsLayout>
    )
  }