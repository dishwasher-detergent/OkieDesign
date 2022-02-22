import DocsLayout from '../../components/Layout/Documentation'
import GettingStarted from "../../components/GettingStarted"
import Customization from "../../components/Customization"

export default function Home() {
    return (
        <DocsLayout>
            <GettingStarted />
            <Customization />
        </DocsLayout>
    )
  }